export const openModal = (id: string) => {
  const { $bootstrap } = useNuxtApp() as any;
  const modal = new $bootstrap.Modal(document.getElementById(id));
  modal.show();
};

export const closeModal = (id: string) => {
  const { $bootstrap } = useNuxtApp() as any;
  const modal = new $bootstrap.Modal(document.getElementById(id));
  modal.hide();
};

export const socialMedias = () => {
  const config = useRuntimeConfig();
  return {
    facebook: config.public.contactFacebook,
    instagram: config.public.contactInstagram,
    youtube: config.public.contactYouTube,
    tiktok: config.public.contactTikTok,
    email: config.public.contactEmail,
    phone: config.public.contactPhone,
    address: config.public.contactAddress,
  };
};

export const toggleGlobalLoader = (value: boolean) => {
  const loader = useState("globalLoader", () => false);
  loader.value = value; // show loader
};

export const productKeys = () => {
  return ["name", "category", "price", "description", "image"];
};
