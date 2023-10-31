import Tarjetas from "./Tarjetas";
import Imagen from "./Imagen";

const cards_content = [
  {
    name: "Consolas PlayStation",
    url: "playstation",
    description: "Encuentra las mejores consolas PlayStation al mejor precio.",
    photo_url:
      "https://wallpaper-house.com/data/out/11/wallpaper2you_469251.jpg",
    btn_color: "btn-primary",
  },
  {
    name: "Consolas Xbox",
    url: "xbox",
    description: "Las mejores consolas Xbox a un solo click",
    photo_url:
      "https://dotesports.com/wp-content/uploads/2022/10/26225504/xbox1-1.png",
    btn_color: "btn-success",
  },
  {
    name: "Consolas Nintendo",
    url: "nintendo",
    description:
      "¿Eres fan de los juegos de Nintendo?, encuentra aquí tu Switch o tu Wii",
    photo_url:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3524ba70148279.5e9e1a288e349.png",
    btn_color: "btn-danger",
  },
  {
    name: "Accesorios",
    url: "accesorios",
    description:
      "¿Buscas accesorios para tu PC o Consola?, aquí tenemos los mejores accesorios al mejor precio",
    photo_url:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2023_09/3596444/230228-gaming-accessories-vl-2x1.jpg",
    btn_color: "btn-info",
  },
  {
    name: "Videojuegos",
    url: "videojuegos",
    description: "Compra aquí tus videojuegos favoritos para cualquier consola",
    photo_url:
      "https://cdnb.artstation.com/p/assets/images/images/025/770/171/large/obeida-zakzak-heros-ps.jpg?1586873913",
    btn_color: "btn-warning",
  },
];

const gaming_wallpaper =
  "https://static.vecteezy.com/system/resources/previews/022/700/313/non_2x/generative-ai-illustration-of-gaming-background-abstract-cyberpunk-style-of-gamer-wallpaper-neon-glow-light-of-scifi-fluorescent-sticks-digitally-generated-image-photo.jpeg";

const Inicio = () => {
  return (
    <>
      <Imagen imagen={gaming_wallpaper} />
      <Tarjetas cards_content={cards_content} />
    </>
  );
};
export default Inicio;
