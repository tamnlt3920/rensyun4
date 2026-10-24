const V=(id,type,prompt,options,answer,explanation)=>({id,section:"vocab",type,prompt,options,answer,explanation});
const G=(id,type,prompt,options,answer,explanation,passage)=>({id,section:"grammar",type,prompt,options,answer,explanation,passage});
const GS=(id,prompt,options,answer,explanation,sourceRecordId)=>({...G(id,"文法の言い換え",prompt,options,answer,explanation),sourceLesson:34,sourceUrl:"https://han-nichi.vercel.app/grammar/minna-2-n4/lesson-34",sourceRecordId});
const GA=(id,prompt,options,answer,explanation,sourceLesson,sourceRecordId)=>({...G(id,"文法形式",prompt,options,answer,explanation),sourceLesson,sourceUrl:`https://han-nichi.vercel.app/grammar/minna-2-n4/lesson-${sourceLesson}`,sourceRecordId});
const R=(id,type,passage,prompt,options,answer,explanation)=>({id,section:"reading",type,passage,prompt,options,answer,explanation});

// Questions are newly authored for this simulator. Every item has one keyed answer and a short rationale.
const exams=[
{id:"01",vocab:[
V("a1","漢字の読み方","毎朝、駅まで［歩きます］。",["あるきます","おきます","はたらきます","まちます"],0,"歩く（あるく）là đi bộ; 歩きます là thể lịch sự."),
V("a2","漢字の読み方","来月、友だちが日本へ［来ます］。",["きます","します","いきます","かえります"],0,"来ます đọc là きます, nghĩa là đến."),
V("a3","漢字の読み方","この町は［安全］です。",["あんぜん","あんしん","ぜんあん","しんぱい"],0,"安全（あんぜん）nghĩa là an toàn."),
V("a4","漢字の読み方","山田さんは［病院］で働いています。",["びょういん","びよういん","びょうえん","びょいん"],0,"病院 đọc là びょういん: bệnh viện."),
V("a5","漢字の読み方","［特急］に乗ると早く着きます。",["とっきゅう","とくきゅう","とっきゅ","とくきゅ"],0,"特急（とっきゅう）là tàu tốc hành."),
V("a6","漢字の読み方","母は毎日［料理］を作ります。",["りょうり","りょり","りょうじ","りょじ"],0,"料理（りょうり）nghĩa là nấu ăn/món ăn."),
V("a7","漢字の読み方","駅の前で［待って］います。",["まって","もって","とって","あって"],0,"待つ（まつ）là chờ; thể て là 待って."),
V("a8","漢字の読み方","あしたは［試験］があります。",["しけん","じけん","しげん","じげん"],0,"試験 đọc là しけん: kỳ thi."),
V("a9","漢字の読み方","この［荷物］を持ってください。",["にもつ","にぶつ","かもつ","かぶつ"],0,"荷物（にもつ）nghĩa là hành lý/đồ đạc."),
V("a10","漢字の読み方","［最近］、よく歩いています。",["さいきん","さいこん","ざいきん","ざいこん"],0,"最近（さいきん）nghĩa là gần đây."),
V("a11","漢字で書く","「しゅくだい」を漢字で書くとどれですか。",["宿題","主題","習題","祝題"],0,"しゅくだい được viết là 宿題: bài tập về nhà."),
V("a12","漢字で書く","「びょうき」を漢字で書くとどれですか。",["病気","病汽","秒気","病器"],0,"びょうき viết là 病気, nghĩa là bệnh."),
V("a13","漢字で書く","「あたらしい」を漢字で書くとどれですか。",["新しい","親しい","楽しい","正しい"],0,"あたらしい viết là 新しい."),
V("a14","漢字で書く","「かいしゃ」を漢字で書くとどれですか。",["会社","会者","回社","会車"],0,"かいしゃ viết là 会社: công ty."),
V("a15","漢字で書く","「しごと」を漢字で書くとどれですか。",["仕事","仕車","使事","指事"],0,"しごと viết là 仕事: công việc."),
V("a16","文脈に合う言葉","このかばんは軽くて（　　　）ので、毎日使っています。",["便利","残念","心配","十分"],0,"便利（べんり）là tiện lợi, phù hợp với ngữ cảnh dùng hằng ngày."),
V("a17","文脈に合う言葉","電車に財布を忘れて、駅員に（　　　）しました。",["相談","練習","招待","説明"],0,"駅員に相談する là hỏi ý kiến/nhờ nhân viên nhà ga giúp."),
V("a18","文脈に合う言葉","この薬を飲むと、せきが（　　　）でしょう。",["止まる","始まる","集まる","決まる"],0,"せきが止まる nghĩa là cơn ho ngừng lại."),
V("a19","文脈に合う言葉","今日は風が強いので、窓を（　　　）ください。",["閉めて","消して","止めて","片づけて"],0,"Đóng cửa sổ là 窓を閉める."),
V("a20","文脈に合う言葉","すみません、この漢字の（　　　）を教えてください。",["読み方","使い方","行き方","作り方"],0,"Hỏi cách đọc chữ Hán: 読み方."),
V("a21","言い換え","「もうすぐ」の意味にいちばん近いものはどれですか。",["まもなく","ときどき","たいてい","やっと"],0,"もうすぐ gần nghĩa với まもなく: sắp, chẳng bao lâu nữa."),
V("a22","言い換え","「この店は値段が安いです」と同じ意味はどれですか。",["この店の品物は高くありません。","この店の品物は新しくありません。","この店は広くありません。","この店は近くありません。"],0,"安い là rẻ, tương đương 高くない (không đắt)."),
V("a23","言い換え","「もう一度言ってください」と同じ意味はどれですか。",["もう一回話してください。","もっと大きく書いてください。","少し待ってください。","先に帰ってください。"],0,"一度 và 一回 đều mang nghĩa một lần."),
V("a24","使い方","「約束」の使い方として正しい文はどれですか。",["友だちと約束をしました。","水を約束に入れました。","約束を食べました。","駅を約束しました。"],0,"約束（やくそく）là cuộc hẹn/lời hứa; 約束をする là cách dùng tự nhiên."),
V("a25","使い方","「経験」の使い方として正しい文はどれですか。",["日本で働いた経験があります。","経験を窓から開けました。","毎朝経験を飲みます。","経験に駅まで歩きます。"],0,"経験（けいけん）là kinh nghiệm; 経験がある diễn tả đã từng trải qua."),
],grammar:[
G("a26","文法形式","日曜日（　　　）友だちと映画を見ました。",["に","を","で","が"],0,"に đánh dấu ngày/thời điểm cụ thể: 日曜日に."),
G("a27","文法形式","寝る前に歯を（　　　）ください。",["みがいて","みがく","みがき","みがいた"],0,"～てください đi với thể て: みがく → みがいて."),
G("a28","文法形式","日本へ来てから、すしが好きに（　　　）。",["なりました","しました","いました","ありました"],0,"好きになる diễn tả trở nên yêu thích; quá khứ là 好きになりました."),
G("a29","文法形式","雨が（　　　）、試合は中止です。",["ふったら","ふっても","ふるので","ふるまで"],0,"～たら diễn tả điều kiện: nếu trời mưa thì trận đấu bị hủy."),
G("a30","文法形式","わたしは一度も北海道へ（　　　）ことがありません。",["行った","行く","行って","行き"],0,"Kinh nghiệm dùng ～たことがある/ない; 行く → 行った."),
G("a31","文法形式","この漢字は辞書（　　　）調べました。",["で","に","を","へ"],0,"で chỉ công cụ: tra bằng từ điển (辞書で調べる)."),
G("a32","文法形式","きのうは疲れていたので、何も（　　　）寝ました。",["食べないで","食べなくて","食べずにを","食べないと"],0,"～ないで diễn tả làm việc sau mà không làm việc trước: không ăn rồi đi ngủ."),
G("a33","文法形式","駅に着いた（　　　）、友だちから電話がありました。",["とき","ながら","まで","ため"],0,"～とき chỉ thời điểm: khi vừa đến ga thì có điện thoại."),
G("a34","文法形式","この店は駅から近い（　　　）、よく行きます。",["ので","のに","でも","しか"],0,"～ので nêu lý do: vì gần nhà ga nên thường đến."),
G("a35","文法形式","妹は母（　　　）料理を習っています。",["に","を","で","へ"],0,"習う người học từ ai dùng に: 母に習う."),
G("a36","文法形式","ここで写真を（　　　）もいいですか。",["撮って","撮る","撮った","撮り"],0,"Xin phép dùng ～てもいいです: 撮ってもいいですか."),
G("a37","文法形式","窓が（　　　）あります。だれか開けましたね。",["開けて","開いて","開ける","開くて"],0,"Cửa sổ ở trạng thái được ai đó mở sẵn: 開けてあります."),
G("a38","文の組み立て","★に入る語句はどれですか。\nわたしは（　　　）（　　　）★（　　　）と思います。\n① 日本 ② に ③ 行きたい ④ いつか",["①","②","③","④"],1,"Câu đúng: わたしはいつか日本に行きたいと思います。Ô ★ là に (②)."),
G("a39","文の組み立て","★に入る語句はどれですか。\n妹は（　　　）（　　　）★（　　　）買いました。\n① で ② スーパー ③ パンを ④ 近くの",["①","②","③","④"],0,"Câu đúng: 妹は近くのスーパーでパンを買いました。Ô ★ là で (①)."),
G("a40","文章の文法","文章の空欄に入る表現はどれですか。",["から","ながら","までに","のに"],0,"Đoạn văn nói uống cà phê xong rồi đi làm, nên dùng ～てから.","毎朝、コーヒーを飲んで（　　　）会社へ行きます。朝ごはんも食べてから出かけます。"),GS("a52","「宿題をしてから、テレビを見ました。」とほぼ同じ意味の文はどれですか。",["宿題をしたあとで、テレビを見ました。","テレビを見てから、宿題をしました。","宿題をしながら、テレビを見ました。","宿題をする前に、テレビを見ました。"],0,"「Vてから」と「Vたあとで」は、前の動作の後に次の動作をする順序を表します。教材の第34課では「Vた＋あとで」の形を扱っています。","grammar-34-3"),GS("a53","「説明書に書いてあるとおりに、組み立てました。」とほぼ同じ意味の文はどれですか。",["説明書に書いてあるように、組み立てました。","説明書を読まないで、組み立てました。","説明書を読む前に、組み立てました。","説明書を読みながら、組み立てました。"],0,"「説明書に書いてあるとおりに」と「説明書に書いてあるように」は、説明書の指示に従って行ったという意味です。教材の第34課では「V辞書形／Vた形＋とおりに」を扱っています。","grammar-34-2"),],reading:[
R("a41","短い文章","田中さんへ\n土曜日にいっしょに買い物に行きませんか。午前はアルバイトがあるので、午後２時に駅の前で会いましょう。\nミカ","ミカさんは何時に田中さんと会いますか。",["午前２時","午後２時","午前のアルバイトの前","土曜日の夜"],1,"Tin nhắn hẹn 午後２時, tức 2 giờ chiều."),
R("a42","短い文章","田中さんへ\n土曜日にいっしょに買い物に行きませんか。午前はアルバイトがあるので、午後２時に駅の前で会いましょう。\nミカ","二人はどこで会いますか。",["アルバイトの店","駅の前","買い物の店","田中さんの家"],1,"ミカ đề nghị gặp trước nhà ga: 駅の前."),
R("a43","情報検索","図書館のお知らせ\n開館時間：火曜日～金曜日 9:00～19:00／土曜日・日曜日 10:00～17:00\n休館日：月曜日、祝日\n本を返す人は、入口の右側にある返却ポストを使ってください。","日曜日の午後４時に図書館へ行くことができますか。",["はい、開いています。","いいえ、月曜日です。","いいえ、午後３時に閉まります。","はい、午後７時まで開いています。"],0,"Chủ nhật thư viện mở đến 17:00, nên 16:00 vẫn mở."),
R("a44","情報検索","図書館のお知らせ\n開館時間：火曜日～金曜日 9:00～19:00／土曜日・日曜日 10:00～17:00\n休館日：月曜日、祝日\n本を返す人は、入口の右側にある返却ポストを使ってください。","本を返す人は、どこに返しますか。",["入口の右の返却ポストに入れます。","火曜日まで本を持って帰ります。","図書館の中に置きます。","受付の人に渡します。"],0,"案内文に「入口の右側にある返却ポストを使ってください」とあるため、返却場所は入口右側の返却ポストです."),
R("a45","中文読解","わたしは去年から料理教室に通っています。最初は、野菜を切るのも時間がかかりました。でも、毎週土曜日に先生といっしょに料理を作ったので、今は一人でカレーや魚の料理ができるようになりました。来月は友だちを家に呼んで、手作りの料理を食べてもらうつもりです。","わたしは今、何ができるようになりましたか。",["料理の先生になること","一人でいくつかの料理を作ること","毎日料理教室へ行くこと","野菜を買うこと"],1,"文中に一人でカレーや魚の料理ができるようになったとあります."),
R("a46","中文読解","わたしは去年から料理教室に通っています。最初は、野菜を切るのも時間がかかりました。でも、毎週土曜日に先生といっしょに料理を作ったので、今は一人でカレーや魚の料理ができるようになりました。来月は友だちを家に呼んで、手作りの料理を食べてもらうつもりです。","来月、何をするつもりですか。",["先生と旅行する","友だちに料理を作ってあげる","料理教室をやめる","魚を買いに行く"],1,"友だちを家に呼び、手料理を食べてもらう予定です."),
R("a47","中文読解","佐藤さんは会社まで電車で通っています。家から駅までは歩いて10分です。いつもは8時の電車に乗りますが、今日は財布を忘れたことに気づいて家へ戻りました。そのため、いつもの電車に間に合いませんでした。駅に着くと、次の電車は15分後でした。佐藤さんは会社に電話して、少し遅れると伝えました。","佐藤さんはどうしていつもの電車に乗れませんでしたか。",["家から駅まで遠いから","財布を取りに家へ戻ったから","会社へ電話していたから","電車が15分遅れたから"],1,"財布を忘れて家に戻ったため、いつもの電車に間に合いませんでした."),
R("a48","中文読解","佐藤さんは会社まで電車で通っています。家から駅までは歩いて10分です。いつもは8時の電車に乗りますが、今日は財布を忘れたことに気づいて家へ戻りました。そのため、いつもの電車に間に合いませんでした。駅に着くと、次の電車は15分後でした。佐藤さんは会社に電話して、少し遅れると伝えました。","佐藤さんは駅に着いてから、何をしましたか。",["財布を買いました。","会社に遅れると連絡しました。","家まで歩いて帰りました。","8時の電車を待ちました。"],1,"駅から会社へ電話し、少し遅れると伝えました."),
]},
{id:"02",vocab:[
V("b1","漢字の読み方","来週、［旅行］に行きます。",["りょこう","りょうこう","りょこ","りょうこ"],0,"旅行（りょこう）nghĩa là chuyến du lịch."),
V("b2","漢字の読み方","この［住所］を書いてください。",["じゅうしょ","じゅしょ","じゅうしょう","じゅしょう"],0,"住所（じゅうしょ）là địa chỉ."),
V("b3","漢字の読み方","父は［運転］が上手です。",["うんてん","うんでん","うてん","うでん"],0,"運転（うんてん）nghĩa là lái xe."),
V("b4","漢字の読み方","［必要］なものを紙に書きます。",["ひつよう","ひっよう","ひじょう","ひちよう"],0,"必要（ひつよう）là cần thiết."),
V("b5","漢字の読み方","［急いで］駅へ行きました。",["いそいで","およいで","うごいて","つづいて"],0,"急ぐ（いそぐ）là vội; 急いで là thể て."),
V("b6","漢字の読み方","この［近所］に郵便局があります。",["きんじょ","きんしょ","こんじょ","こんしょ"],0,"近所（きんじょ）là khu lân cận."),
V("b7","漢字の読み方","［文化］について勉強しました。",["ぶんか","ぶんが","ふんか","ふんが"],0,"文化（ぶんか）nghĩa là văn hóa."),
V("b8","漢字の読み方","この町は［人口］が多いです。",["じんこう","にんこう","じんごう","にんごう"],0,"人口（じんこう）là dân số."),
V("b9","漢字の読み方","［説明］を聞いてから始めましょう。",["せつめい","せつまい","ぜつめい","ぜつまい"],0,"説明（せつめい）là lời giải thích."),
V("b10","漢字の読み方","音楽を［聞きながら］勉強します。",["ききながら","かきながら","ひきながら","おきながら"],0,"聞く đọc là きく, nghĩa là nghe."),
V("b11","漢字で書く","「ゆうびんきょく」を漢字で書くとどれですか。",["郵便局","郵使局","郵便屋","郵使屋"],0,"ゆうびんきょく viết là 郵便局."),
V("b12","漢字で書く","「しんぶん」を漢字で書くとどれですか。",["新聞","新文","親聞","親文"],0,"しんぶん viết là 新聞: báo."),
V("b13","漢字で書く","「かぞく」を漢字で書くとどれですか。",["家族","家続","家庭","家族う"],0,"かぞく viết là 家族."),
V("b14","漢字で書く","「あんぜん」を漢字で書くとどれですか。",["安全","安然","案全","案然"],0,"あんぜん viết là 安全."),
V("b15","漢字で書く","「しゅみ」を漢字で書くとどれですか。",["趣味","主味","趣未","取味"],0,"しゅみ viết là 趣味: sở thích."),
V("b16","文脈に合う言葉","頭が痛いので、薬を飲んで少し（　　　）しました。",["休憩","安心","紹介","準備"],0,"休憩する là nghỉ ngơi."),
V("b17","文脈に合う言葉","駅で切符を買うとき、自動（　　　）を使いました。",["販売機","冷蔵庫","洗濯機","事務所"],0,"自動販売機 là máy bán hàng tự động."),
V("b18","文脈に合う言葉","この道をまっすぐ行くと、右に銀行が（　　　）います。",["見えて","聞こえて","教えて","考えて"],0,"建物が目に入る: 銀行が見える."),
V("b19","文脈に合う言葉","田中さんはいつも約束の時間に（　　　）来ます。",["遅れずに","負けずに","壊さずに","なくさずに"],0,"時間に遅れずに来る nghĩa là đến đúng giờ."),
V("b20","文脈に合う言葉","旅行の写真を友だちに（　　　）ました。",["見せ","知らせ","集め","始め"],0,"写真を見せる là cho xem ảnh."),
V("b21","言い換え","「用事があります」と同じ意味に近いものはどれですか。",["しなければならないことがあります。","行きたい場所があります。","知りたいことがあります。","買いたいものがあります。"],0,"用事 là việc cần làm/công chuyện."),
V("b22","言い換え","「この道はせまいです」と同じ意味はどれですか。",["この道は広くありません。","この道は長くありません。","この道は明るくありません。","この道は新しくありません。"],0,"せまい trái nghĩa với 広い; せまい nghĩa là hẹp."),
V("b23","言い換え","「すぐに帰ります」と同じ意味はどれですか。",["まもなく帰ります。","ゆっくり帰ります。","ときどき帰ります。","あとで帰ります。"],0,"すぐに gần nghĩa với まもなく: ngay/sắp."),
V("b24","使い方","「世話」の使い方として正しい文はどれですか。",["旅行中、となりの人が犬の世話をしてくれました。","世話を駅まで歩きました。","世話を三つ買いました。","世話を窓から見ました。"],0,"犬の世話をする là chăm sóc chó."),
V("b25","使い方","「間に合う」の使い方として正しい文はどれですか。",["急げば、８時の電車に間に合います。","この店は野菜に間に合います。","間に合うを辞書で読みます。","昨日は間に合うを食べました。"],0,"時間に間に合う là kịp giờ."),
],grammar:[
G("b26","文法形式","日本語が上手に（　　　）ように、毎日練習しています。",["話せる","話す","話した","話して"],0,"Khả năng/trạng thái mong muốn dùng ～ように: nói giỏi được."),
G("b27","文法形式","ここに車を（　　　）はいけません。",["止めて","止める","止めた","止め"],0,"Cấm làm gì: ～てはいけません."),
G("b28","文法形式","わたしは弟（　　　）部屋を掃除させました。",["に","を","が","へ"],0,"Sai khiến với người thực hiện hành động dùng に khi có tân ngữ: 弟に掃除させる."),
G("b29","文法形式","宿題を（　　　）あとで、テレビを見ます。",["した","して","する","し"],0,"～たあとで: sau khi làm bài tập."),
G("b30","文法形式","このケーキは甘（　　　）すぎます。",["すぎて","すぎる","すぎ","すぎた"],2,"Tính từ đuôi い bỏ い + すぎる: 甘すぎる."),
G("b31","文法形式","時間が（　　　）ば、いっしょに昼ごはんを食べましょう。",["あれ","ある","あった","あり"],0,"Điều kiện ～ば của ある là あれば."),
G("b32","文法形式","この本は漢字が多くて、わたしには（　　　）にくいです。",["読み","読む","読んで","読め"],0,"～にくい nối với gốc masu: 読み + にくい."),
G("b33","文法形式","父は毎朝新聞を（　　　）ながら朝ごはんを食べます。",["読み","読む","読んで","読んだ"],0,"～ながら nối với gốc masu: 読みながら."),
G("b34","文法形式","その店は駅の近く（　　　）あります。",["に","で","を","が"],0,"に chỉ nơi tồn tại của vật/cửa hàng: 近くにあります."),
G("b35","文法形式","友だちが来る（　　　）、部屋を掃除しておきます。",["前に","あとで","ながら","までに"],0,"～前に chỉ việc chuẩn bị trước khi bạn đến."),
G("b36","文の組み立て","★に入る語句はどれですか。\n母は（　　　）（　　　）★（　　　）。\n① 妹に ② おいしい ③ 料理を ④ 作ってあげました",["①","②","③","④"],2,"Câu đúng: 母は妹においしい料理を作ってあげました。Ô ★ là 料理を (③)."),
G("b37","文の組み立て","★に入る語句はどれですか。\nこの本は（　　　）（　　　）★（　　　）。\n① 日本語が ② わかりやすくて ③ 絵も ④ 多いです",["①","②","③","④"],2,"Câu đúng: この本は日本語がわかりやすくて絵も多いです。Ô ★ là 絵も (③)."),
G("b38","文法形式","漢字の意味が（　　　）とき、先生に聞きます。",["わからない","わからなく","わからなくて","わからず"],0,"～とき đứng sau mệnh đề thể thường: 意味がわからないとき."),
G("b39","文法形式","薬を飲んだ（　　　）、熱が下がりました。",["ので","のに","でも","なら"],0,"～ので nêu nguyên nhân/kết quả trong câu này."),
G("b40","文章の文法","文章の空欄に入る表現はどれですか。",["ながら","ので","のに","ても"],1,"Hai câu nêu lý do rồi kết quả: vì gần nhà ga nên thường sử dụng.","この店は駅の近くにあります。（　　　）、よく利用しています。駅から歩いてすぐなので便利です。"),GS("b52","「宿題をしてから、テレビを見ました。」とほぼ同じ意味の文はどれですか。",["宿題をしたあとで、テレビを見ました。","テレビを見てから、宿題をしました。","宿題をしながら、テレビを見ました。","宿題をする前に、テレビを見ました。"],0,"「Vてから」と「Vたあとで」は、前の動作の後に次の動作をする順序を表します。教材の第34課では「Vた＋あとで」の形を扱っています。","grammar-34-3"),GS("b53","「説明書に書いてあるとおりに、組み立てました。」とほぼ同じ意味の文はどれですか。",["説明書に書いてあるように、組み立てました。","説明書を読まないで、組み立てました。","説明書を読む前に、組み立てました。","説明書を読みながら、組み立てました。"],0,"「説明書に書いてあるとおりに」と「説明書に書いてあるように」は、説明書の指示に従って行ったという意味です。教材の第34課では「V辞書形／Vた形＋とおりに」を扱っています。","grammar-34-2"),],reading:[
R("b41","短い文章","木村さんへ\n借りていた本を返したいのですが、今日は仕事が遅くなります。明日の昼休みに、会社の受付に置いておきます。時間があるときに受け取ってください。\nゆき","ゆきさんは本をどこに置きますか。",["会社の受付","図書館","木村さんの家","駅"],0,"明日の昼休みに会社の受付へ置いておくとあります."),
R("b42","短い文章","木村さんへ\n借りていた本を返したいのですが、今日は仕事が遅くなります。明日の昼休みに、会社の受付に置いておきます。時間があるときに受け取ってください。\nゆき","ゆきさんはどうして今日、本を返しませんか。",["本をなくしたから","仕事が遅くなるから","木村さんがいないから","昼休みがないから"],1,"今日仕事が遅くなるため、明日返すと伝えています."),
R("b43","情報検索","市民プール\n平日：午前10時～午後8時\n土曜日：午前9時～午後6時\n日曜日・祝日：午前9時～午後4時\n休み：毎週水曜日\n入る前に、受付でチケットを買ってください。","火曜日の午後７時にプールへ行けますか。",["はい、入れます。","いいえ、水曜日だからです。","いいえ、午後６時に閉まります。","はい、午後９時まで開いています。"],0,"Thứ ba mở đến 20:00, nên 19:00 có thể vào."),
R("b44","情報検索","市民プール\n平日：午前10時～午後8時\n土曜日：午前9時～午後6時\n日曜日・祝日：午前9時～午後4時\n休み：毎週水曜日\n入る前に、受付でチケットを買ってください。","プールに入る前に、何をしなければなりませんか。",["受付でチケットを買う","水曜日に行く","午後４時まで待つ","電話で予約する"],0,"Thông báo yêu cầu mua vé tại quầy trước khi vào."),
R("b45","中文読解","先月、家族と海の近くにある町へ旅行しました。天気予報では雨でしたが、朝からよく晴れていました。午前中は市場を見て、昼ごはんに魚を食べました。午後は海で泳ぐつもりでしたが、水が冷たかったので、かわりに海岸を散歩しました。帰る前に、町の小さな店でおみやげを買いました。","午後、家族はどうして海で泳ぎませんでしたか。",["雨が降ったから","水が冷たかったから","市場へ行ったから","店が閉まっていたから"],1,"Nước biển lạnh nên họ đi dạo thay vì bơi."),
R("b46","中文読解","先月、家族と海の近くにある町へ旅行しました。天気予報では雨でしたが、朝からよく晴れていました。午前中は市場を見て、昼ごはんに魚を食べました。午後は海で泳ぐつもりでしたが、水が冷たかったので、かわりに海岸を散歩しました。帰る前に、町の小さな店でおみやげを買いました。","帰る前に何をしましたか。",["市場で魚を買いました。","海で泳ぎました。","町の店でおみやげを買いました。","ホテルで休みました。"],2,"最後の文: trước khi về, họ mua quà ở một cửa hàng nhỏ."),
R("b47","中文読解","鈴木さんは今月から新しいアパートに住んでいます。駅から歩いて５分で、近くにスーパーもあります。部屋は前のアパートより小さいですが、窓が大きくて明るいです。引っ越しの日、となりに住んでいる人が荷物を運ぶのを手伝ってくれました。鈴木さんは、今度お礼にケーキを持って行こうと思っています。","新しい部屋について、正しいものはどれですか。",["駅から歩いて５分です。","前の部屋より広いです。","窓が小さくて暗いです。","スーパーまで電車で行きます。"],0,"Nhà mới đi bộ 5 phút từ ga; câu còn lại trái với nội dung."),
R("b48","中文読解","鈴木さんは今月から新しいアパートに住んでいます。駅から歩いて５分で、近くにスーパーもあります。部屋は前のアパートより小さいですが、窓が大きくて明るいです。引っ越しの日、となりに住んでいる人が荷物を運ぶのを手伝ってくれました。鈴木さんは、今度お礼にケーキを持って行こうと思っています。","鈴木さんは今度、何をするつもりですか。",["となりの人にケーキを持って行く","駅で友だちを待つ","スーパーを開く","古いアパートに戻る"],0,"彼は手伝ってくれた隣人にお礼のケーキを持って行く予定です."),
]},
{id:"03",vocab:[
V("c1","漢字の読み方","［来週］、大阪へ行きます。",["らいしゅう","らいしゅ","きしゅう","きしゅ"],0,"来週（らいしゅう）là tuần sau."),
V("c2","漢字の読み方","この［建物］はとても古いです。",["たてもの","けんぶつ","たてぶつ","けんもの"],0,"建物（たてもの）là tòa nhà/công trình."),
V("c3","漢字の読み方","［海岸］を歩きました。",["かいがん","うみがん","かいかん","うみかん"],0,"海岸（かいがん）là bờ biển."),
V("c4","漢字の読み方","［動物］が好きです。",["どうぶつ","とうぶつ","どうもの","とうもの"],0,"動物（どうぶつ）là động vật."),
V("c5","漢字の読み方","［必要］な書類を出してください。",["ひつよう","ひじょう","ひつよ","ひじょ"],0,"必要（ひつよう）nghĩa là cần thiết."),
V("c6","漢字の読み方","友だちを家に［招待］しました。",["しょうたい","しょたい","しょうだい","しょだい"],0,"招待（しょうたい）là mời."),
V("c7","漢字の読み方","［注意］して道を渡ってください。",["ちゅうい","ちゅい","ちゅうじ","ちゅじ"],0,"注意（ちゅうい）là chú ý/cẩn thận."),
V("c8","漢字の読み方","今日は［特別］な日です。",["とくべつ","とくべち","どくべつ","どくべち"],0,"特別（とくべつ）là đặc biệt."),
V("c9","漢字の読み方","新しい［生活］に慣れました。",["せいかつ","せいがつ","しょうかつ","しょうがつ"],0,"生活（せいかつ）là cuộc sống/sinh hoạt."),
V("c10","漢字の読み方","［急に］雨が降り始めました。",["きゅうに","きゅに","いそに","いきゅうに"],0,"急に（きゅうに）là đột nhiên."),
V("c11","漢字で書く","「しんせつ」を漢字で書くとどれですか。",["親切","新切","親雪","新雪"],0,"しんせつ viết là 親切: tử tế."),
V("c12","漢字で書く","「たいせつ」を漢字で書くとどれですか。",["大切","大雪","太切","太雪"],0,"たいせつ viết là 大切: quan trọng/quý giá."),
V("c13","漢字で書く","「べんきょう」を漢字で書くとどれですか。",["勉強","免強","勉教","免教"],0,"べんきょう viết là 勉強."),
V("c14","漢字で書く","「あつい」を漢字で書くとどれですか。\n（夏の天気）",["暑い","熱い","厚い","温い"],0,"Thời tiết nóng dùng 暑い; 熱い thường chỉ vật nóng."),
V("c15","漢字で書く","「はな」を漢字で書くとどれですか。\n（顔の一部）",["鼻","花","話","波"],0,"Mũi là 鼻; hoa là 花."),
V("c16","文脈に合う言葉","この道は夜になると暗いので、気を（　　　）ください。",["つけて","つけては","かけて","いれて"],0,"気をつける là chú ý/cẩn thận."),
V("c17","文脈に合う言葉","会議の時間が変わったので、みんなに（　　　）しました。",["連絡","返事","注文","案内"],0,"時間変更を皆に知らせる: 連絡する."),
V("c18","文脈に合う言葉","この料理は少しからいですが、とても（　　　）です。",["おいしい","うるさい","きびしい","さびしい"],0,"Đồ ăn ngon là おいしい."),
V("c19","文脈に合う言葉","旅行に行く前にホテルを（　　　）しました。",["予約","用意","説明","利用"],0,"Đặt khách sạn trước: ホテルを予約する."),
V("c20","文脈に合う言葉","雨が降りそうなので、かさを（　　　）出かけます。",["持って","持ちに","持つと","持ったら"],0,"Mang ô đi ra ngoài: かさを持って出かける."),
V("c21","言い換え","「あの人は親切です」と同じ意味はどれですか。",["あの人はやさしいです。","あの人は元気です。","あの人は静かです。","あの人はまじめです。"],0,"親切 gần nghĩa với やさしい: tốt bụng/tử tế."),
V("c22","言い換え","「部屋を片づけてください」と同じ意味はどれですか。",["部屋をきれいにしてください。","部屋を建ててください。","部屋を借りてください。","部屋を探してください。"],0,"片づける là dọn dẹp, sắp xếp cho gọn."),
V("c23","言い換え","「電車がこみます」と同じ意味に近いものはどれですか。",["電車に人がたくさん乗っています。","電車が速く走っています。","電車が止まっています。","電車が新しくなります。"],0,"こむ diễn tả nơi đông người."),
V("c24","使い方","「準備」の使い方として正しい文はどれですか。",["旅行の準備をしています。","準備を駅で食べました。","準備を窓から見ました。","準備に友だちを読みました。"],0,"準備をする là chuẩn bị."),
V("c25","使い方","「残る」の使い方として正しい文はどれですか。",["会議のあと、部屋に一人残りました。","残るを辞書で買いました。","ごはんを残って飲みました。","駅へ残って歩きました。"],0,"部屋に残る là ở lại trong phòng."),
],grammar:[
G("c26","文法形式","日本へ行く（　　　）、パスポートを確認してください。",["前に","あとで","ながら","まで"],0,"～前に: hãy kiểm tra hộ chiếu trước khi đi Nhật."),
G("c27","文法形式","ここに名前を（　　　）ください。",["書いて","書く","書いた","書き"],0,"～てください yêu cầu làm gì: 書いてください."),
G("c28","文法形式","雨が降っている（　　　）、出かけなければなりません。",["のに","ので","なら","ても"],0,"～のに diễn tả sự trái ngược: dù đang mưa vẫn phải ra ngoài."),
G("c29","文法形式","日本語の新聞が少し（　　　）ようになりました。",["読める","読む","読んだ","読んで"],0,"Khả năng đọc: 読む → 読める; ～ようになる diễn tả sự thay đổi."),
G("c30","文法形式","この箱は重すぎて、一人では（　　　）ません。",["持て","持ち","持って","持つ"],0,"Khả năng phủ định của 持つ là 持てません."),
G("c31","文法形式","日が（　　　）前に、家に帰りましょう。",["暮れる","暮れた","暮れて","暮れ"],0,"Trước khi trời tối: 日が暮れる前に."),
G("c32","文法形式","先生に作文を（　　　）いただきました。",["直して","直す","直した","直し"],0,"～ていただく diễn tả được ai đó làm giúp: 直していただく."),
G("c33","文法形式","母はわたしに野菜を全部（　　　）。",["食べさせました","食べられました","食べていました","食べてみました"],0,"食べさせる là bắt/cho ăn; mẹ yêu cầu tôi ăn hết rau."),
G("c34","文法形式","このボタンを押す（　　　）、ドアが開きます。",["と","ても","なら","のに"],0,"～と diễn tả kết quả tự nhiên khi nhấn nút."),
G("c35","文法形式","駅まで歩いて（　　　）時間はどのくらいですか。",["かかる","かかって","かかった","かかり"],0,"Câu hỏi thời gian cần thể thường bổ nghĩa danh từ: かかる時間."),
G("c36","文の組み立て","★に入る語句はどれですか。\n雨が降ったので（　　　）（　　　）★（　　　）。\n① 早く ② 家へ ③ 帰ることに ④ しました",["①","②","③","④"],2,"Câu đúng: 雨が降ったので早く家へ帰ることにしました。Ô ★ là 帰ることに (③)."),
G("c37","文の組み立て","★に入る語句はどれですか。\nわたしは（　　　）（　　　）★（　　　）。\n① 毎朝 ② 歩いて ③ 駅まで ④ 行きます",["①","②","③","④"],2,"Câu đúng: わたしは毎朝歩いて駅まで行きます。Ô ★ là 駅まで (③)."),
G("c38","文法形式","説明をよく（　　　）から、質問してください。",["聞いて","聞く","聞いた","聞き"],0,"～てから diễn tả trình tự: nghe kỹ rồi hãy hỏi."),
G("c39","文法形式","この店は日曜日（　　　）開いています。",["でも","しか","ほど","まで"],0,"でも sau ngày trong tuần mang nghĩa “ngay cả/chủ nhật cũng mở”."),
G("c40","文章の文法","文章の空欄に入る表現はどれですか。",["ように","ことに","ために","そうに"],0,"Thói quen mình cố gắng duy trì được diễn đạt bằng ～ようにしています。","仕事が忙しい日もありますが、日本語を勉強する（　　　）しています。毎日少しずつ続けています。"),GS("c52","「宿題をしてから、テレビを見ました。」とほぼ同じ意味の文はどれですか。",["宿題をしたあとで、テレビを見ました。","テレビを見てから、宿題をしました。","宿題をしながら、テレビを見ました。","宿題をする前に、テレビを見ました。"],0,"「Vてから」と「Vたあとで」は、前の動作の後に次の動作をする順序を表します。教材の第34課では「Vた＋あとで」の形を扱っています。","grammar-34-3"),GS("c53","「説明書に書いてあるとおりに、組み立てました。」とほぼ同じ意味の文はどれですか。",["説明書に書いてあるように、組み立てました。","説明書を読まないで、組み立てました。","説明書を読む前に、組み立てました。","説明書を読みながら、組み立てました。"],0,"「説明書に書いてあるとおりに」と「説明書に書いてあるように」は、説明書の指示に従って行ったという意味です。教材の第34課では「V辞書形／Vた形＋とおりに」を扱っています。","grammar-34-2"),],reading:[
R("c41","短い文章","山本さんへ\n会議は午後３時からでしたが、部長の予定が変わったので、午後４時に始めることになりました。会議室も２階から３階の会議室に変わりました。資料は前と同じものを使います。\n事務の人","会議は何時に始まりますか。",["午後２時","午後３時","午後４時","午後５時"],2,"Lịch được đổi thành bắt đầu lúc 16:00."),
R("c42","短い文章","山本さんへ\n会議は午後３時からでしたが、部長の予定が変わったので、午後４時に始めることになりました。会議室も２階から３階の会議室に変わりました。資料は前と同じものを使います。\n事務の人","会議について、変わったものはどれですか。",["使う資料","会議の時間と部屋","会議の日","会議の参加者"],1,"Thời gian và phòng họp thay đổi; tài liệu vẫn như cũ."),
R("c43","情報検索","スポーツセンター\nプール：午前9時～午後7時（火曜日休み）\nテニスコート：午前8時～午後6時（雨の日は使えません）\n体育館：午前9時～午後9時\n受付で会員カードを見せてください。","火曜日の午後５時にプールを使えますか。",["はい、午後７時までです。","いいえ、火曜日は休みです。","はい、午後９時までです。","いいえ、午前９時からです。"],1,"Hồ bơi nghỉ thứ Ba."),
R("c44","情報検索","スポーツセンター\nプール：午前9時～午後7時（火曜日休み）\nテニスコート：午前8時～午後6時（雨の日は使えません）\n体育館：午前9時～午後9時\n受付で会員カードを見せてください。","施設を使う前に、何を見せますか。",["チケット","会員カード","学生証","予約の紙"],1,"Thông báo yêu cầu xuất trình thẻ hội viên ở quầy."),
R("c45","中文読解","中村さんは去年、近くの会社でアルバイトを始めました。週に３回、学校が終わってから働いています。仕事は忙しいですが、店長やほかの人が親切なので、楽しく続けています。最近、店長に「来月から仕事の日を一日増やせませんか」と聞かれました。中村さんは試験が終わったら、そうしたいと思っています。","中村さんは今、週に何回働いていますか。",["一回","二回","三回","四回"],2,"週に３回働いているとあります."),
R("c46","中文読解","中村さんは去年、近くの会社でアルバイトを始めました。週に３回、学校が終わってから働いています。仕事は忙しいですが、店長やほかの人が親切なので、楽しく続けています。最近、店長に「来月から仕事の日を一日増やせませんか」と聞かれました。中村さんは試験が終わったら、そうしたいと思っています。","中村さんはいつ仕事の日を増やすつもりですか。",["試験が終わってから","来週から","学校を卒業してから","去年から"],0,"試験が終わったら増やしたいと言っています."),
R("c47","中文読解","先週、わたしは初めて一人で料理を作りました。母が出かけていたので、冷蔵庫にあった野菜と肉を使ってカレーを作ることにしました。レシピを見ながら作りましたが、水を入れすぎて少し薄くなりました。それでも弟は「おいしい」と言って、二回おかわりをしました。次は水の量に気をつけたいです。","カレーはどうなりましたか。",["水が多くて、少し薄くなりました。","肉を入れ忘れました。","弟が食べませんでした。","レシピがありませんでした。"],0,"Nước cho vào nhiều nên món cà ri hơi nhạt."),
R("c48","中文読解","先週、わたしは初めて一人で料理を作りました。母が出かけていたので、冷蔵庫にあった野菜と肉を使ってカレーを作ることにしました。レシピを見ながら作りましたが、水を入れすぎて少し薄くなりました。それでも弟は「おいしい」と言って、二回おかわりをしました。次は水の量に気をつけたいです。","次に料理をするとき、何に気をつけますか。",["肉の値段","弟の食べる量","水の量","レシピの長さ"],2,"最後に水の量に気をつけたいとあります."),
]}
];

// Source-linked questions authored from Han-Nichi Minna no Nihongo II lessons 26–50.
// Each mock covers all 25 lessons in vocabulary and a broad grammar sample.
const sourceVocab=window.HAN_NICHI_N4_JA_VOCAB||[];
const groupByLesson=items=>{const groups=new Map();items.forEach(q=>{if(!groups.has(q.sourceLesson))groups.set(q.sourceLesson,[]);groups.get(q.sourceLesson).push(q);});return groups;};
const typeOrder=(order)=>{const rank=new Map(order.map((type,index)=>[type,index]));return (a,b)=>(rank.get(a.type)??order.length)-(rank.get(b.type)??order.length);};
const vocabTaskOrder=typeOrder(["漢字の読み方","漢字で書く","文脈に合う言葉","言い換え","使い方"]);
const grammarTaskOrder=typeOrder(["文法形式","文法の言い換え","文の組み立て","文章の文法"]);
const readingTaskOrder=typeOrder(["短い文章","中文読解","情報検索"]);
const sourceVocabByLesson=groupByLesson(sourceVocab);
const VOCAB_COVERAGE_KEY="nat4q-vocab-coverage-v1",GRAMMAR_COVERAGE_KEY="nat4q-grammar-coverage-v1";
function readLocalJSON(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
function writeLocalJSON(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{}}
const vocabExposure=readLocalJSON(VOCAB_COVERAGE_KEY,{counts:{},recent:[]});
const grammarExposure=readLocalJSON(GRAMMAR_COVERAGE_KEY,{counts:{},recent:[]});
function drawBalancedQuestions(all,exposure,storageKey,usedIds,requiredTypes=[]){
  const selected=[],lessonBalance=new Map();
  requiredTypes.forEach(requiredType=>{
    const pool=all.filter(q=>!requiredType||q.type===requiredType).filter(q=>!usedIds.has(q.id));
    if(!pool.length)return;
    const unseen=pool.filter(q=>(exposure.counts[q.id]||0)===0);
    const base=unseen.length?unseen:pool;
    const minCount=Math.min(...base.map(q=>exposure.counts[q.id]||0));
    let candidates=base.filter(q=>(exposure.counts[q.id]||0)===minCount);
    const notRecent=candidates.filter(q=>!exposure.recent.includes(q.id));
    if(notRecent.length)candidates=notRecent;
    const leastSeenByLesson=Math.min(...candidates.map(q=>lessonBalance.get(q.sourceLesson)||0));
    candidates=candidates.filter(q=>(lessonBalance.get(q.sourceLesson)||0)===leastSeenByLesson);
    const question=candidates[Math.floor(Math.random()*candidates.length)];
    if(question){selected.push(question);usedIds.add(question.id);lessonBalance.set(question.sourceLesson,(lessonBalance.get(question.sourceLesson)||0)+1);exposure.counts[question.id]=(exposure.counts[question.id]||0)+1;exposure.recent=[...exposure.recent,question.id].slice(-40);}
  });
  writeLocalJSON(storageKey,exposure);
  return selected;
}
function drawSourceQuestions(groups,usedIds,requiredTypes=[]){return drawBalancedQuestions([...groups.values()].flat(),vocabExposure,VOCAB_COVERAGE_KEY,usedIds,requiredTypes);}
function drawSourceGrammar(count,usedIds){const all=window.HAN_NICHI_N4_APPLIED_GRAMMAR||[];return drawBalancedQuestions(all,grammarExposure,GRAMMAR_COVERAGE_KEY,usedIds,Array(count).fill("文法形式"));}
function selectQuestionTypes(questions,requirements){const result=[];for(const [type,count] of requirements){const pool=questions.filter(q=>q.type===type);if(pool.length<count)throw new Error(`Không đủ câu dạng ${type}: cần ${count}, có ${pool.length}.`);result.push(...pool.slice(0,count));}return result;}
const appliedGrammarByExam=[
  GA("source-applied-33-1","「ここに入るな」と書いてあります。どういう意味ですか。",["ここに入ることができます。","ここに入ってはいけません。","ここに入らなければなりません。","ここから出なければなりません。"],1,"第33課の例「ここに入るな」は禁止を表します。選択肢では「入ってはいけません」が同じ指示です。",33,"grammar-33-1"),
  GA("source-applied-32-1","熱がありますから、病院へ（　　　）ほうがいいです。",["行った","行って","行く","行き"],0,"助言の「～たほうがいい」は動詞のた形に接続します。行くのた形は「行った」です。第32課の例文も「熱がありますから、病院へ行ったほうがいいです」です。",32,"grammar-32-1"),
  GA("source-applied-35-3","このボタンを押すと、電気が（　　　）。",["つきます","つけます","ついています","つけられます"],0,"第35課の例文「このボタンを押すと、電気がつきます」と同じ自動詞の文型です。「電気がつく」と言います。",35,"grammar-35-3"),
];
if(sourceVocab.length){
  exams.forEach((e,examIndex)=>{
    const authoredVocab=e.vocab,authoredGrammar=e.grammar;
    // Reserve authored slots for every vocabulary task family in each form.
    e.authoredVocab=selectQuestionTypes(authoredVocab,[
      ["漢字の読み方",1],["漢字で書く",1],["文脈に合う言葉",2],["言い換え",2],["使い方",2],
    ]);
    // Grammar & Reading has 18 applied grammar items; no item asks the learner to name a grammar pattern.
    const grammarParaphrase=authoredGrammar.filter(q=>q.type==="文法の言い換え");
    const grammarOrder=authoredGrammar.filter(q=>q.type==="文の組み立て");
    const grammarText=authoredGrammar.filter(q=>q.type==="文章の文法");
    e.authoredGrammar=[...grammarParaphrase,...grammarOrder,...grammarText];
    e.sourceVocabLessons=Array.from({length:20},(_,i)=>26+((examIndex*8+i)%25));
    const sourceVocabSample=e.sourceVocabLessons.map((lesson,i)=>{
      const pool=sourceVocabByLesson.get(lesson)||[],type=i%2===0?"漢字の読み方":"漢字で書く";
      const typedPool=pool.filter(q=>q.type===type);
      return typedPool[(examIndex*17+i*13)%typedPool.length];
    }).filter(Boolean);
    e.vocab=[...e.authoredVocab,...sourceVocabSample].sort(vocabTaskOrder);
    e.grammar=[...e.authoredGrammar].sort(grammarTaskOrder);
    const vocabTypeCounts=Object.fromEntries(["漢字の読み方","漢字で書く","文脈に合う言葉","言い換え","使い方"].map(type=>[type,e.vocab.filter(q=>q.type===type).length]));
    if(e.vocab.length!==28||Object.values(vocabTypeCounts).some(count=>count===0))throw new Error(`Đề ${e.id} không đủ 28 câu hoặc thiếu dạng từ vựng: ${JSON.stringify(vocabTypeCounts)}`);
    const grammarTypeCounts=Object.fromEntries(["文法の言い換え","文の組み立て","文章の文法"].map(type=>[type,e.authoredGrammar.filter(q=>q.type===type).length]));
    if(e.grammar.length!==5||grammarTypeCounts["文法の言い換え"]!==2||grammarTypeCounts["文の組み立て"]!==2||grammarTypeCounts["文章の文法"]!==1)throw new Error(`Đề ${e.id} phân bổ ngữ pháp không đúng: ${JSON.stringify(grammarTypeCounts)}`);
  });
}

// NAT-TEST 4Q has 29 questions in Grammar & Reading; add one item for each reading task type.
const supplementalReadings=[
[
R("a49","短い文章","山田さんへ\nあしたの日本語クラスは、先生の都合で午後６時から７時半までになりました。教室はいつもの３階です。宿題の作文を忘れずに持ってきてください。\n事務室","あしたのクラスについて、正しいものはどれですか。",["午前６時に始まります。","教室が４階に変わりました。","作文を持っていきます。","先生は来ません。"],2,"お知らせには宿題の作文を持ってくるように書かれています。"),
R("a50","情報検索","市民プール\n利用時間：午前10時～午後８時\n休み：毎週水曜日\n子ども（小学生まで）：300円\n大人：600円\n水泳帽を必ず持ってきてください。","木曜日に大人二人でプールへ行きます。いくら払いますか。",["300円","600円","900円","1,200円"],3,"大人は一人600円なので、二人で1,200円です。"),
R("a51","中文読解","木村さんは、先月から会社の近くにあるパン屋で昼ごはんを買っています。前は家から弁当を持ってきましたが、朝は忙しくて作る時間がありません。パン屋には野菜の入ったパンもあるので、最近はそれをよく食べます。来週からは、店が休みの日だけ自分で弁当を作るつもりです。","木村さんはどうしてパン屋で昼ごはんを買っていますか。",["パン屋が会社の中にあるから","朝、弁当を作る時間がないから","家の近くに店がないから","パンを作る仕事をしているから"],1,"朝は忙しく、弁当を作る時間がないためです。")
],
[
R("b49","短い文章","鈴木さんへ\n日曜日にいっしょに映画を見ませんか。駅前の映画館で午後１時に始まります。映画のあとで、映画館のとなりの喫茶店でお茶を飲みましょう。切符はわたしが買っておきます。\nゆき","ゆきさんは何をしますか。",["喫茶店で切符を買います。","映画の切符を買います。","鈴木さんを駅まで送ります。","映画のあとで家に帰ります。"],1,"切符はゆきさんが買っておくと書かれています。"),
R("b50","情報検索","さくらホテル\n朝食：午前６時半～９時（１階レストラン）\n大浴場：午後３時～午前１時\nチェックアウト：午前10時まで\nタオルは部屋から持ってきてください。","午前９時半に朝ごはんを食べることができますか。",["はい、１階で食べられます。","いいえ、９時に終わります。","はい、大浴場で食べられます。","いいえ、ホテルを出たあとです。"],1,"朝食は午前９時までなので、９時半には食べられません。"),
R("b51","中文読解","わたしは毎週土曜日に祖母の家へ行きます。祖母は一人で住んでいるので、買い物をしたり、庭の花に水をやったりします。先週は雨が降っていたため、外へ買い物に行きませんでした。そのかわり、祖母といっしょに家で古い写真を見ました。祖母は若いころの話をたくさんしてくれました。","先週、わたしと祖母は何をしましたか。",["庭に花を植えました。","雨の中で買い物をしました。","家で写真を見ました。","祖母の家を掃除しました。"],2,"雨だったので買い物に行かず、家で古い写真を見ました。")
],
[
R("c49","短い文章","みなさんへ\n来週の遠足は、雨の場合は中止です。朝７時に学校のホームページでお知らせします。遠足に行く人は、お弁当と飲み物を持って、午前８時に学校の前に集まってください。\n先生","雨が降ったとき、どうしますか。",["午前８時に公園へ行きます。","学校のホームページを見ます。","先生に電話します。","お弁当を学校で買います。"],1,"雨の場合は、朝７時に学校のホームページで知らせます。"),
R("c50","情報検索","駅前図書館\n本を借りられる数：一人５冊まで\n貸出期間：２週間\n返す場所：カウンターまたは入口の返却ポスト\nCDは返却ポストに入れないでください。","CDを返すとき、どうしますか。",["入口の返却ポストに入れます。","カウンターへ持っていきます。","２週間あとに郵便で送ります。","図書館の外に置きます。"],1,"CDは返却ポストに入れず、カウンターへ返します。"),
R("c51","中文読解","先月、家族で海の近くの町へ旅行しました。天気予報では雨でしたが、朝になると空が晴れていたので、自転車を借りて海岸まで行きました。海岸には人が少なく、静かでした。昼ごはんを食べたあと、町の小さな博物館に入りました。昔の船の写真を見ることができて、父がとても喜びました。","父はどうして喜びましたか。",["海岸に人がたくさんいたから","自転車を買うことができたから","昔の船の写真を見ることができたから","天気予報が当たったから"],2,"博物館で昔の船の写真を見られたことを父が喜びました。")
]
];
exams.forEach((e,i)=>{e.reading.push(...supplementalReadings[i]);e.reading.sort(readingTaskOrder);});

const homeView=document.querySelector("#homeView"),examView=document.querySelector("#examView"),resultView=document.querySelector("#resultView");
let exam=null,sections=[],sectionIndex=0,answers={},deadline=0,timerId=null,startedAt=0,finishedAt=0,lastExamId=null;
const sectionMeta={vocab:{jp:"文字・語彙",title:"文字・語彙",minutes:25,marker:"01",foot:"文字・語彙 · 28問 · 25分"},language:{jp:"文法・読解",title:"文法・読解",minutes:55,marker:"02",foot:"文法・読解 · 29問 · 55分"}};
const mondaiInstructions={
  vocab:{"漢字の読み方":{number:"１",text:"つぎのことばはどう読みますか。１・２・３・４から一番いいものを一つ選んでください。"},"漢字で書く":{number:"２",text:"つぎのことばはどう書きますか。１・２・３・４から一番いいものを一つ選んでください。"},"文脈に合う言葉":{number:"３",text:"（　　　）に入ることばとして一番いいものを一つ選んでください。"},"言い換え":{number:"４",text:"ことばと意味が一番近いものを一つ選んでください。"},"使い方":{number:"５",text:"ことばの使い方として一番いい文を一つ選んでください。"}},
  language:{"文法形式":{number:"１",text:"（　　　）に入るものとして一番いいものを一つ選んでください。"},"文法の言い換え":{number:"２",text:"文とほぼ同じ意味の文を一つ選んでください。"},"文の組み立て":{number:"３",text:"★に入るものとして一番いいものを一つ選んでください。"},"文章の文法":{number:"４",text:"文章の（　　　）に入るものとして一番いいものを一つ選んでください。"},"短い文章":{number:"５",text:"文章を読んで、質問に答えてください。"},"中文読解":{number:"６",text:"文章を読んで、質問に答えてください。"},"情報検索":{number:"７",text:"案内を読んで、質問に答えてください。"}}
};
const escapeHTML=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
function beginExam(id){const template=exams.find(e=>e.id===id);if(!template)throw new Error(`Không tìm thấy bộ đề ${id}.`);const sourceVocabTypes=Array.from({length:20},(_,i)=>i%2===0?"漢字の読み方":"漢字で書く");const usedVocab=new Set(),usedGrammar=new Set();const generatedGrammar=drawSourceGrammar(13,usedGrammar);exam={...template,vocab:[...template.authoredVocab,...drawSourceQuestions(sourceVocabByLesson,usedVocab,sourceVocabTypes)].sort(vocabTaskOrder),grammar:[...generatedGrammar,...template.authoredGrammar].sort(grammarTaskOrder),reading:[...template.reading].sort(readingTaskOrder)};const counts=[exam.vocab.length,exam.grammar.length+exam.reading.length];if(exam.vocab.length!==28||exam.grammar.length!==18||exam.reading.length!==11||counts[1]!==29)throw new Error(`Bộ đề ${id} sai cấu trúc: ${counts[0]}+${counts[1]} câu.`);lastExamId=id;sections=[{key:"vocab",questions:exam.vocab},{key:"language",questions:[...exam.grammar,...exam.reading]}];sectionIndex=0;answers={};startedAt=Date.now();finishedAt=0;homeView.classList.add("hidden");resultView.classList.add("hidden");examView.classList.remove("hidden");showSection();}
function startRandomExam(){const candidates=exams.filter(e=>e.id!==lastExamId),pool=candidates.length?candidates:exams;const chosen=pool[Math.floor(Math.random()*pool.length)];beginExam(chosen.id);}
document.querySelector("#startExam").addEventListener("click",startRandomExam);
function showSection(){const section=sections[sectionIndex],meta=sectionMeta[section.key];deadline=Date.now()+meta.minutes*60*1000;document.querySelector("#sectionMarker").textContent=meta.marker;document.querySelector("#sectionTitle").textContent=meta.title;renderQuestion();clearInterval(timerId);tick();timerId=setInterval(tick,1000);window.scrollTo({top:0,behavior:"smooth"});}
function tick(){const left=Math.max(0,Math.ceil((deadline-Date.now())/1000));const m=String(Math.floor(left/60)).padStart(2,"0"),s=String(left%60).padStart(2,"0");const timer=document.querySelector("#timer");timer.textContent=`${m}:${s}`;timer.classList.toggle("urgent",left<=300);if(left===0){clearInterval(timerId);advanceSection(true);}}
function renderQuestion(){const section=sections[sectionIndex],list=section.questions;document.querySelector("#questionNumber").textContent=`${list.length}問`;document.querySelector("#sectionProgress").textContent=`0 / ${list.length}問`;document.querySelector("#sectionBar").style.width="0%";let lastPassage=null,lastMondai="";document.querySelector("#questionContent").innerHTML=list.map((q,i)=>{let passage="",mondai="";if(q.passage&&q.passage!==lastPassage){passage=`<div class="reading-passage" lang="ja"><div class="passage-text">${escapeHTML(q.passage).replaceAll("\n","<br>")}</div></div>`;lastPassage=q.passage;}const group=mondaiInstructions[section.key][q.type],groupKey=`${section.key}:${q.type}`;if(group&&groupKey!==lastMondai){mondai=`<div class="mondai-instruction" lang="ja"><strong>問題${group.number}</strong><span>${group.text}</span></div>`;lastMondai=groupKey;}return `${mondai}<article class="full-question" id="question-${escapeHTML(q.id)}"><div class="full-question-meta"><span>問${String(i+1).padStart(2,"0")}</span></div>${passage}<fieldset class="exam-question" lang="ja"><legend>${escapeHTML(q.prompt).replaceAll("\n","<br>")}</legend><div class="exam-options">${q.options.map((o,j)=>`<label class="exam-option ${answers[q.id]===j?"selected":""}"><input class="exam-radio" type="radio" name="answer-${escapeHTML(q.id)}" value="${j}" ${answers[q.id]===j?"checked":""}><span class="exam-option-letter">${String.fromCharCode(65+j)}</span><span class="exam-option-text">${escapeHTML(o)}</span></label>`).join("")}</div></fieldset></article>`;}).join("");document.querySelectorAll(".exam-radio").forEach(input=>input.addEventListener("change",()=>{const qid=input.name.replace("answer-","");answers[qid]=Number(input.value);input.closest(".full-question").querySelectorAll(".exam-option").forEach(label=>label.classList.toggle("selected",label.querySelector("input").checked));drawAnswerSheet();}));drawAnswerSheet();}
function drawAnswerSheet(){const list=sections[sectionIndex].questions;document.querySelector("#answerGrid").innerHTML=list.map((q,i)=>`<button class="answer-cell ${answers[q.id]!==undefined?"answered":""}" data-q="${q.id}" aria-label="問${i+1}${answers[q.id]!==undefined?"、解答済み":"、未解答"}">${i+1}</button>`).join("");document.querySelectorAll(".answer-cell").forEach(b=>b.addEventListener("click",()=>document.querySelector(`#question-${b.dataset.q}`).scrollIntoView({behavior:"smooth",block:"center"})));const done=list.filter(q=>answers[q.id]!==undefined).length;document.querySelector("#answeredCount").textContent=done;document.querySelector("#unansweredCount").textContent=list.length-done;document.querySelector("#sectionProgress").textContent=`${done} / ${list.length}問`;document.querySelector("#sectionBar").style.width=`${done/list.length*100}%`;}
function submitPrompt(){const list=sections[sectionIndex].questions,empty=list.length-list.filter(q=>answers[q.id]!==undefined).length;document.querySelector("#modalMessage").textContent=empty?`未回答の問題が${empty}問あります。提出すると、この部分は終了します。`:"提出後は解答を変更できません。";document.querySelector("#confirmModal").classList.remove("hidden");}
function advanceSection(auto=false){clearInterval(timerId);document.querySelector("#confirmModal").classList.add("hidden");if(sectionIndex===0){sectionIndex=1;showSection();if(auto)document.querySelector("#modalMessage").textContent="時間になりました。次の部分に進みます。";}else{finishedAt=Date.now();showResults();}}
function showResults(){clearInterval(timerId);examView.classList.add("hidden");resultView.classList.remove("hidden");const all=[...sections[0].questions,...sections[1].questions];const right=all.filter(q=>answers[q.id]===q.answer).length;const vocabRight=sections[0].questions.filter(q=>answers[q.id]===q.answer).length;const grammars=exam.grammar.filter(q=>answers[q.id]===q.answer).length;const reading=exam.reading.filter(q=>answers[q.id]===q.answer).length;document.querySelector("#resultTitle").textContent="採点結果";document.querySelector("#resultSubtitle").textContent="";document.querySelector("#scorePercent").textContent=`${Math.round(right/all.length*100)}%`;document.querySelector("#scoreFraction").textContent=`${right} / ${all.length}問`;document.querySelector("#elapsedTime").textContent=formatElapsed(finishedAt-startedAt);document.querySelector("#sectionScores").textContent=`文字・語彙 ${vocabRight}/${exam.vocab.length} · 文法 ${grammars}/${exam.grammar.length} · 読解 ${reading}/${exam.reading.length}`;renderReview("all");}
function formatElapsed(ms){const minutes=Math.floor(ms/60000),seconds=Math.floor(ms%60000/1000);return `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;}
function renderReview(filter){const all=[...exam.vocab,...exam.grammar,...exam.reading];const filtered=all.filter(q=>filter==="all"||(filter==="wrong"&&answers[q.id]!==undefined&&answers[q.id]!==q.answer)||(filter==="correct"&&answers[q.id]===q.answer)||(filter==="blank"&&answers[q.id]===undefined));document.querySelector("#reviewList").innerHTML=filtered.map((q,i)=>{const selected=answers[q.id],correct=selected===q.answer,sourceLink=q.sourceUrl&&q.sourceUrl.startsWith("https://han-nichi.vercel.app/")?`<p class="review-source"><a href="${escapeHTML(q.sourceUrl)}" target="_blank" rel="noopener noreferrer">Nguồn Han-Nichi · bài ${escapeHTML(q.sourceLesson)}</a></p>`:"";return `<article class="review-card"><div class="review-card-head"><span>${q.section==="vocab"?"TỪ VỰNG":q.section==="grammar"?"NGỮ PHÁP":"ĐỌC HIỂU"} · ${escapeHTML(q.type)}</span><b class="review-status ${selected===undefined?"blank-status":correct?"correct-status":"wrong-status"}">${selected===undefined?"Bỏ trống":correct?"Đúng":"Sai"}</b></div>${q.passage?`<div class="review-passage">${escapeHTML(q.passage).replaceAll("\n","<br>")}</div>`:""}<p class="review-prompt">${escapeHTML(q.prompt).replaceAll("\n","<br>")}</p><div class="review-options">${q.options.map((o,j)=>`<div class="review-option ${j===q.answer?"answer-key":""} ${j===selected&&selected!==q.answer?"chosen-wrong":""}"><span>${String.fromCharCode(65+j)}</span>${escapeHTML(o)}${j===q.answer?" <b>· Đáp án</b>":""}</div>`).join("")}</div><p class="review-explanation">${escapeHTML(q.explanation)}</p>${sourceLink}</article>`;}).join("")||`<div class="empty-review">Không có câu nào trong mục này.</div>`;}
document.querySelector("#submitSection").addEventListener("click",submitPrompt);document.querySelector("#submitSectionSide").addEventListener("click",submitPrompt);document.querySelector("#cancelSubmit").addEventListener("click",()=>document.querySelector("#confirmModal").classList.add("hidden"));document.querySelector("#confirmSubmit").addEventListener("click",()=>advanceSection());function leaveExam(){if(confirm("Thoát bài thi? Tiến độ của đề này sẽ bị xóa.")){clearInterval(timerId);examView.classList.add("hidden");homeView.classList.remove("hidden");}}document.querySelector("#backHome").addEventListener("click",leaveExam);document.querySelector("#resultHome").addEventListener("click",()=>{resultView.classList.add("hidden");homeView.classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});});document.querySelector("#reviewFilter").addEventListener("change",e=>renderReview(e.target.value));
