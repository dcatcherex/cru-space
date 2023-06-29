import {motion} from "framer-motion"

const Home = () => {
  const subjects = [
    "ภาษาไทย",
    "คณิตศาสตร์",
    "เทคโนโลยี",
    "วิทยาศาสตร์",
    "ศาสนาและวัฒนธรรม",
    "สุขศึกษาและพลศึกษา",
    "ทัศนศิลป์",
    "ดนตรีและนาฏศิลป์",
    "การงานอาชีพ",
    "ภาษาต่างประเทศ",
  ];

  const pictures = [
    "https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/d8qgtvjzcrx5h4z0ct2z",
    "https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/fbjyiyft0jmb8mgsxex2","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/gtcyksin6whrhs9hu2p3","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/t0spc5toid0roxdfnxkm","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/cnfuzh9stoxvkdgpxmbl","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/rjz7jvvlfuo5ges6hsyq","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/ed0r85myzbwcuzgjzgdr","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/wqtrwkdlpdatkvaioqfj","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/qjnk2pnnbitfwurszezl","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/jzdvjzelpv0bln4gtzxo","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/sxs94uv2a3ktcgnosabo","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/phbh4sxdcgwtxmeevvib","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/hafyhtblolxjyfxwkowr","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/yvraw0wcu5vseiw3zxil","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/e3qgyylf6nsqsvsewlee","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/j42y6oic4fi3amfcknoy","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/kq7w7fkngucb2c9ugd81","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/oika2x6oskhjprxdgtai","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/h31xze3swqijq5werd9n","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/hxcbsvothbd2ep7lf9pb","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/f3ib8nvriyeits5kkqu6","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/lwudmkj5wc3uzqfnstnp","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/dnb8lmjyamfcspwyyolp","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/awhrh595cdql8ztj6vi0","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/ja07ryizzioxr9nhehae","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/doffhvactxxkowhqt1rk","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/elczfzjxp4kgsokppcaj","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/xrg0unxywhhr2pwpuqrf","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/dlar04h5bu4ux0fzgmhx","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/hdee1pnhjvgoo7bnso8g","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/g84otb2qzmlbpdmkqz9k","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/qwyzqvf1lacz0bbcfyu5","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/nnyowhqj1wlkbyjjfiow","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/tnwmnagecsetocqgz2d4","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/yybkyvz34qhjje4spigq","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/odartmfpbiwbrufbdc3b","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/ipasdmxwpzktz2ib8ewf","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/otstjz3cqu4kynzbjzf6","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/iuekcsge7fr9gmeuweg6","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/x8trcv5pl5llxeffgku7","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/zoiuv8orgdltmcbmv9r5","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/pa8hnmp8b6cxjlbeznde","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/f6muap6hdkkpqt0f9w4z","https://res.cloudinary.com/dc8gsxlxo/image/upload/f_auto,q_auto/v1/quizlink/ns3oruy0ryfwpdca4hph"
    // Add more picture URLs here
  ];

  return (
    <div className=" font-light max-w-[1280px] mx-auto ">
      
      
      <div>
        <h1 className="font-extrabold text-[#222328] sm:text-4xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Kru Community Showcase</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
      </div>

      <motion.div className=" flex-nowrap overflow-scroll scrollbar-hide mt-4 truncate "initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
          <button className="btnsmall mr-2">ทั้งหมด</button>
          <button className="btnsmall mr-2">เทคโนโลยี</button>
          <button className="btnsmall mr-2">วิทยาศาสตร์</button>
          <button className="btnsmall mr-2">ศาสนาและวัฒนธรรม</button>
          <button className="btnsmall mr-2">สุขศึกษาและพลศึกษา</button>
          <button className="btnsmall mr-2">ทัศนศิลป์</button>
          <button className="btnsmall mr-2">ดนตรีและนาฏศิลป์</button>
          <button className="btnsmall mr-2">การงานอาชีพ</button>
      </motion.div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        
        {pictures.map((pic,idx) => (
          <div key={idx} className="">
            <div className="flex"><img  src={pic} className="rounded-2xl" /></div>
          </div>
        )
        )}




      </div>

      
    </div>
  );
};

export default Home;
