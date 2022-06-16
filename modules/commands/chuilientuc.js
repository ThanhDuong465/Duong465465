module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "...",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("em xin nói chuyện nhẹ nhàng đúng 1p30s trong nhóm này nha!");
setTimeout(() => {a({body: "Đ!t con mẹ mày" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Mày ra đây tao bảo" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh con chó" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Mày trốn khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Đéo ra nữa bố mày đốt nhà mày" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ mày giờ" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Mày vẫn đéo dám ra à" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi nữa")} , 90000);
setTimeout(() => {a({body: "À thôi nghe bố mày chưi tiếp nè" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Đụ con đĩ mẹ mày" + " " + name, mentions: arraytag})} , 100000);
setTimeout(() => {a({body: "thằng óc cức" + " " + name, mentions: arraytag})} , 105000);
setTimeout(() => {a({body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name, mentions: arraytag})} , 110000);
setTimeout(() => {a({body: "tinh trùng khuyết tật" + " " + name, mentions: arraytag})} , 115000);
setTimeout(() => {a({body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name, mentions: arraytag})} , 120000);
setTimeout(() => {a({body: "đụ đĩ mẹ mày" + " " + name, mentions: arraytag})} , 125000);
setTimeout(() => {a({body: "địt con mẹ mày" + " " + name, mentions: arraytag})} , 130000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 135000);
setTimeout(() => {a({body: "Hoá ra cũng chỉ là con chó mang hình dáng người" + " " + name, mentions: arraytag})} , 140000);
setTimeout(() => {a({body: " Sống ở đời mà cứ như Hề trong rạp xiếc : ))" + " " + name, mentions: arraytag})} , 145000);
setTimeout(() => {a({body: "Mày đừng so sánh bọn tao với nó" + " " + name, mentions: arraytag})} , 155000);
setTimeout(() => {a({body: "vì nó là chó còn tao là người" + " " + name, mentions: arraytag})} , 160000);
setTimeout(() => {a({body: "Mày đừng bật cười khi nghe điều đó" + " " + name, mentions: arraytag})} , 165000);
setTimeout(() => {a({body: "vì cả mày và nó đều chó như nhau" + " " + name, mentions: arraytag})} , 170000);
setTimeout(() => {a({body: "Xã hội đổi màu" + " " + name, mentions: arraytag})} , 175000);
setTimeout(() => {a({body: "Làm người thì khó, làm chó thì dễ ..!!" + " " + name, mentions: arraytag})} , 180000);
setTimeout(() => {a({body: "Sống phải biết nghĩ" + " " + name, mentions: arraytag})} , 185000);
setTimeout(() => {a({body: "Cuộc sống phức tạp, xã hội bon chen !!" + " " + name, mentions: arraytag})} , 190000);
setTimeout(() => {a({body: " Sống nghèo, sống khó chứ đừng sống CHÓ nha con" + " " + name, mentions: arraytag})} , 280000);
setTimeout(() => {a({body: "Cứ soi gương nhiều vào" + " " + name, mentions: arraytag})} , 195000);
setTimeout(() => {a({body: "Sống – Là phải biết điều" + " " + name, mentions: arraytag})} , 200000);
setTimeout(() => {a({body: " Đừng tỏ vẻ máu liều nhiều hơn máu não" + " " + name, mentions: arraytag})} , 205000);
setTimeout(() => {a({body: "Thích nổi và chơi trội tao sẽ cho mày lên ngôi…." + " " + name, mentions: arraytag})} , 210000);
setTimeout(() => {a({body: "Đú bẩn mà sấc mày thích thì cứ lên mâm trên mà ngồi!!!" + " " + name, mentions: arraytag})} , 215000);
setTimeout(() => {a({body: "Có điều mày lên nhớ rằng….." + " " + name, mentions: arraytag})} , 220000);
setTimeout(() => {a({body: "Giữa chó với người sẽ chẳng bao giờ có sự công bằng.," + " " + name, mentions: arraytag})} , 225000);
setTimeout(() => {a({body: "Dù có cố thể hiện hay là đang nguỵ biện thì ấn tượng mày chỉ là 1 tiếng ẳng !!" + " " + name, mentions: arraytag})} , 230000);
setTimeout(() => {a({body: "ĐỊT CON MẸ!!!" + " " + name, mentions: arraytag})} , 235000);
setTimeout(() => {a({body: "Đớp lời bọn tao như 1 con chó!!!" + " " + name, mentions: arraytag})} , 240000);
setTimeout(() => {a({body: "Con đéo nào cũng như con nào!!!" + " " + name, mentions: arraytag})} , 245000);
setTimeout(() => {a({body: "Hài!!!" + " " + name, mentions: arraytag})} , 250000);
setTimeout(() => {a({body: "Đụ má não cặc à" + " " + name, mentions: arraytag})} , 255000);
setTimeout(() => {a({body: "Lịch sự thì không có – Chỉ có cái máu chơi chó thì không ai sánh bằng" + " " + name, mentions: arraytag})} , 260000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 265000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 270000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 275000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 280000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 285000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 290000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 295000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 300000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 305000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 310000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 315000);
setTimeout(() => {a({body: "Cái lồn đụ đĩ mẹ mày ra đây coi" + " " + name, mentions: arraytag})} , 320000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây bố xem nào" + " " + name, mentions: arraytag})} , 325000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây đọc cho hết" + " " + name, mentions: arraytag})} , 330000);
setTimeout(() => {a({body: "Đụ con đĩ mẹ mày" + " " + name, mentions: arraytag})} , 335000);
setTimeout(() => {a({body: "thằng óc cức" + " " + name, mentions: arraytag})} , 340000);
setTimeout(() => {a({body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name, mentions: arraytag})} , 345000);
setTimeout(() => {a({body: "tinh trùng khuyết tật" + " " + name, mentions: arraytag})} , 350000);
setTimeout(() => {a({body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name, mentions: arraytag})} , 355000);
setTimeout(() => {a({body: "đụ đĩ mẹ mày" + " " + name, mentions: arraytag})} , 360000);
setTimeout(() => {a({body: "địt con mẹ mày" + " " + name, mentions: arraytag})} , 365000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 370000);
setTimeout(() => {a({body: "Địt mẹ m ra đọc nè" + " " + name, mentions: arraytag})} , 375000);
setTimeout(() => {a({body: "đĩ lồn" + " " + name, mentions: arraytag})} , 380000);
setTimeout(() => {a({body: "ĐỊT MẸEEEEEEEEE MÀY!!!" + " " + name, mentions: arraytag})} , 385000);
setTimeout(() => {a({body: "Chửi mày đến đây thôi" + " " + name, mentions: arraytag})}, 390000);
setTimeout(() => {a({body: "Khi nào boss tao cài thêm lệnh thì tao chửi tiếp" + " " + name, mentions: arraytag})}, 395000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại mày ở chương trình lần sau" + " " + name, mentions: arraytag})}, 400000);
setTimeout(() => {a("Chào tạm biệt 🥺")} , 405000);


  
                     }