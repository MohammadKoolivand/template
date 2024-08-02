export const base_api = "http://localhost:8000/";

//ترتیب بر حسب  منوهای سه سطحی است و در آخر هم بر حسب حروف الفبا!
export const API = {
  Authentication: {
    Login: `${base_api}app/signin`,
    Register: `${base_api}app/signup`,
  },
};
