import { create } from "zustand";
import type {
  SiteSettings,
  NavigationItem,
  HeroData,
  Service,
  PortfolioProject,
  Course,
  Testimonial,
  BlogPost,
  CaseStudy,
  Resource,
  FAQ,
  SocialLinks,
  ContactSubmission,
} from "@/types/database";

// ============ API Helper ============
async function api<T>(
  url: string,
  options?: RequestInit
): Promise<{ data?: T; error?: string }> {
  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    if (!res.ok) {
      const err = await res.json();
      return { error: err.error || "Request failed" };
    }
    const data = await res.json();
    return { data };
  } catch {
    return { error: "Network error" };
  }
}

// ============ Auth Store ============
interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  loading: true,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    const { data, error } = await api<{ user: { email: string }; session: { access_token: string } }>(
      "/api/admin/auth",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );

    if (error || !data) {
      set({ loading: false, error: error || "Login failed" });
      return false;
    }

    localStorage.setItem("admin_token", data.session.access_token);
    localStorage.setItem("admin_user", JSON.stringify(data.user));
    set({ isAuthenticated: true, user: data.user, loading: false, error: null });
    return true;
  },

  logout: () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    set({ isAuthenticated: false, user: null, loading: false });
  },

  checkAuth: () => {
    const token = localStorage.getItem("admin_token");
    const user = localStorage.getItem("admin_user");
    if (token && user) {
      set({ isAuthenticated: true, user: JSON.parse(user), loading: false });
    } else {
      set({ isAuthenticated: false, user: null, loading: false });
    }
  },
}));

// ============ Dashboard Store ============
interface DashboardStats {
  totalProjects: number;
  totalCourses: number;
  totalTestimonials: number;
  totalBlogPosts: number;
  newMessages: number;
  totalStudents: number;
}

interface DashboardState {
  stats: DashboardStats | null;
  recentContacts: ContactSubmission[];
  loading: boolean;
  fetchDashboard: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  stats: null,
  recentContacts: [],
  loading: false,

  fetchDashboard: async () => {
    set({ loading: true });
    const { data } = await api<{ stats: DashboardStats; recentContacts: ContactSubmission[] }>(
      "/api/admin/dashboard"
    );
    if (data) {
      set({ stats: data.stats, recentContacts: data.recentContacts, loading: false });
    } else {
      set({ loading: false });
    }
  },
}));

// ============ Generic CRUD Store Factory ============
interface CrudState<T> {
  items: T[];
  loading: boolean;
  error: string | null;
  fetch: () => Promise<void>;
  create: (item: Partial<T>) => Promise<T | null>;
  update: (item: Partial<T> & { id: string }) => Promise<T | null>;
  remove: (id: string) => Promise<boolean>;
}

function createCrudStore<T extends { id: string }>(endpoint: string) {
  return create<CrudState<T>>((set, get) => ({
    items: [],
    loading: false,
    error: null,

    fetch: async () => {
      set({ loading: true, error: null });
      const { data, error } = await api<T[]>(endpoint);
      if (error) {
        set({ loading: false, error });
      } else {
        set({ items: data || [], loading: false });
      }
    },

    create: async (item) => {
      const { data, error } = await api<T>(endpoint, {
        method: "POST",
        body: JSON.stringify(item),
      });
      if (error || !data) {
        set({ error: error || "Create failed" });
        return null;
      }
      set({ items: [...get().items, data] });
      return data;
    },

    update: async (item) => {
      const { data, error } = await api<T>(endpoint, {
        method: "PUT",
        body: JSON.stringify(item),
      });
      if (error || !data) {
        set({ error: error || "Update failed" });
        return null;
      }
      set({ items: get().items.map((i) => (i.id === data.id ? data : i)) });
      return data;
    },

    remove: async (id) => {
      const { error } = await api(endpoint, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      if (error) {
        set({ error });
        return false;
      }
      set({ items: get().items.filter((i) => i.id !== id) });
      return true;
    },
  }));
}

// ============ Content Stores ============
export const useServicesStore = createCrudStore<Service>("/api/admin/services");
export const usePortfolioStore = createCrudStore<PortfolioProject>("/api/admin/portfolio");
export const useCoursesStore = createCrudStore<Course>("/api/admin/courses");
export const useTestimonialsStore = createCrudStore<Testimonial>("/api/admin/testimonials");
export const useBlogStore = createCrudStore<BlogPost>("/api/admin/blog");
export const useCaseStudiesStore = createCrudStore<CaseStudy>("/api/admin/case-studies");
export const useResourcesStore = createCrudStore<Resource>("/api/admin/resources");
export const useFaqStore = createCrudStore<FAQ>("/api/admin/faq");
export const useContactStore = createCrudStore<ContactSubmission>("/api/admin/contact");

// ============ Settings Store (Single Row) ============
interface SettingsState {
  settings: SiteSettings | null;
  loading: boolean;
  error: string | null;
  fetch: () => Promise<void>;
  update: (data: Partial<SiteSettings>) => Promise<boolean>;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  settings: null,
  loading: false,
  error: null,

  fetch: async () => {
    set({ loading: true, error: null });
    const { data, error } = await api<SiteSettings>("/api/admin/settings");
    if (error) {
      set({ loading: false, error });
    } else {
      set({ settings: data || null, loading: false });
    }
  },

  update: async (updateData) => {
    const { data, error } = await api<SiteSettings>("/api/admin/settings", {
      method: "PUT",
      body: JSON.stringify(updateData),
    });
    if (error || !data) {
      set({ error: error || "Update failed" });
      return false;
    }
    set({ settings: data });
    return true;
  },
}));

// ============ Hero Store (Single Row) ============
interface HeroState {
  hero: HeroData | null;
  loading: boolean;
  error: string | null;
  fetch: () => Promise<void>;
  update: (data: Partial<HeroData>) => Promise<boolean>;
}

export const useHeroStore = create<HeroState>((set) => ({
  hero: null,
  loading: false,
  error: null,

  fetch: async () => {
    set({ loading: true, error: null });
    const { data, error } = await api<HeroData>("/api/admin/hero");
    if (error) {
      set({ loading: false, error });
    } else {
      set({ hero: data || null, loading: false });
    }
  },

  update: async (updateData) => {
    const { data, error } = await api<HeroData>("/api/admin/hero", {
      method: "PUT",
      body: JSON.stringify(updateData),
    });
    if (error || !data) {
      set({ error: error || "Update failed" });
      return false;
    }
    set({ hero: data });
    return true;
  },
}));

// ============ Navigation Store ============
interface NavigationState {
  items: NavigationItem[];
  loading: boolean;
  error: string | null;
  fetch: () => Promise<void>;
  create: (item: Partial<NavigationItem>) => Promise<NavigationItem | null>;
  bulkUpdate: (items: NavigationItem[]) => Promise<boolean>;
  remove: (id: string) => Promise<boolean>;
}

export const useNavigationStore = create<NavigationState>((set, get) => ({
  items: [],
  loading: false,
  error: null,

  fetch: async () => {
    set({ loading: true, error: null });
    const { data, error } = await api<NavigationItem[]>("/api/admin/navigation");
    if (error) {
      set({ loading: false, error });
    } else {
      set({ items: data || [], loading: false });
    }
  },

  create: async (item) => {
    const { data, error } = await api<NavigationItem>("/api/admin/navigation", {
      method: "POST",
      body: JSON.stringify(item),
    });
    if (error || !data) {
      set({ error: error || "Create failed" });
      return null;
    }
    set({ items: [...get().items, data] });
    return data;
  },

  bulkUpdate: async (items) => {
    const { data, error } = await api<NavigationItem[]>("/api/admin/navigation", {
      method: "PUT",
      body: JSON.stringify({ items }),
    });
    if (error) {
      set({ error });
      return false;
    }
    if (data) set({ items: data });
    return true;
  },

  remove: async (id) => {
    const { error } = await api("/api/admin/navigation", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    if (error) {
      set({ error });
      return false;
    }
    set({ items: get().items.filter((i) => i.id !== id) });
    return true;
  },
}));

// ============ Social Links Store (Single Row) ============
interface SocialLinksState {
  links: SocialLinks | null;
  loading: boolean;
  error: string | null;
  fetch: () => Promise<void>;
  update: (data: Partial<SocialLinks>) => Promise<boolean>;
}

export const useSocialLinksStore = create<SocialLinksState>((set) => ({
  links: null,
  loading: false,
  error: null,

  fetch: async () => {
    set({ loading: true, error: null });
    const { data, error } = await api<SocialLinks>("/api/admin/social-links");
    if (error) {
      set({ loading: false, error });
    } else {
      set({ links: data || null, loading: false });
    }
  },

  update: async (updateData) => {
    const { data, error } = await api<SocialLinks>("/api/admin/social-links", {
      method: "PUT",
      body: JSON.stringify(updateData),
    });
    if (error || !data) {
      set({ error: error || "Update failed" });
      return false;
    }
    set({ links: data });
    return true;
  },
}));

// ============ File Upload Helper ============
export async function uploadFile(
  file: File,
  bucket: string = "general",
  folder: string = ""
): Promise<{ url: string; path: string } | null> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("bucket", bucket);
  formData.append("folder", folder);

  try {
    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
