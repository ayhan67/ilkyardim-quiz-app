// İlkyardım Soru Bankası
// Her soru aşağıdaki formatta olmalıdır:
// {
//   id: benzersiz numara,
//   question: "Soru metni?",
//   options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
//   correctAnswer: doğru cevabın index'i (0-3 arası),
//   explanation: "Açıklama metni"
// }

export const questionBank = [
  {
    id: 1,
    question: "Göğüs ağrısında İlk yardım nasıl olmalıdır?",
    options: [
      "Hasta şok pozisyonuna getirilir",
      "Hasta rahat edeceği pozisyonda dinlenmeye alınır, sakinleştirilir",
      "Hasta koma pozisyonuna getirilir",
      "Hastaya kalp masajı yapılır"
    ],
    correctAnswer: 1,
    explanation: "Göğüs ağrısı olan hasta rahat edeceği pozisyonda dinlenmeye alınmalı ve sakinleştirilmelidir. Bu durum kalp krizi belirtisi olabilir."
  },
  {
    id: 2,
    question: "Aşağıdakilerden hangisi atardamar kanamasının özelliğidir?",
    options: [
      "Kesik kesik akar",
      "Sızıntı şeklinde akar",
      "Koyu renklidir",
      "Kendiliğinden durur"
    ],
    correctAnswer: 0,
    explanation: "Atardamar kanaması kalbin atışıyla beraber kesik kesik (nabızla birlikte) akar. Kırmızı renklidir ve acil müdahale gerektirir."
  },
  {
    id: 3,
    question: "Hasta/Yaralının ilk değerlendirilmesinde ilk önce aşağıdakilerden hangisi kontrol edilmelidir?",
    options: [
      "Solunum yolu açıklığı",
      "Solunum durumu",
      "Bilinç durumu",
      "Dolaşım durumu"
    ],
    correctAnswer: 2,
    explanation: "İlk yardımda ABC protokolünden önce bilinç durumu kontrol edilmelidir. Hasta bilincini değerlendirmek için omuzundan nazikçe sarsılır ve seslenilir."
  },
  {
    id: 4,
    question: "Göze yabancı bir cisim batması varsa ya da metal parçası kaçmışsa ilk yardım nasıl olmalıdır?",
    options: [
      "Yumuşak ve nemli bir bezle çıkarılmaya çalışılır",
      "Göz ovularak çıkarılmaya çalışılır",
      "Çıkarana kadar uğraşılır",
      "Göze dokunulmaz, tıbbi yardım istenir"
    ],
    correctAnswer: 3,
    explanation: "Göze batan yabancı cisimlerde göze kesinlikle dokunulmamalı, cismi çıkarmaya çalışılmamalıdır. Derhal tıbbi yardım alınmalıdır."
  },
  {
    id: 5,
    question: "Kırık olan bir hastada aşağıdakilerden hangisinin yapılması doğrudur?",
    options: [
      "Atel (tespit) uygulanır",
      "Kırık düzeltilmeye çalışılır",
      "Kırık yer kalp seviyesinin altında tutulur",
      "Kırık sıcak tutulmaya çalışılır"
    ],
    correctAnswer: 0,
    explanation: "Kırık olan bölgeye atel (tespit) uygulanır. Kırık düzeltilmeye çalışılmamalı, hareket ettirilmemelidir."
  },
  {
    id: 6,
    question: "Aşağıdaki zehirlenme yollarından hangisinde ilk yardımda hastaya yoğurt yedirilmesi yeterlidir?",
    options: [
      "Solunum yoluyla",
      "Cilt yoluyla",
      "Sindirim yoluyla",
      "Hiç birinde"
    ],
    correctAnswer: 3,
    explanation: "Zehirlenme vakalarında yoğurt yedirmek etkisizdir ve zararlı olabilir. Her zehirlenme türünde profesyonel tıbbi yardım alınmalıdır."
  },
  {
    id: 7,
    question: "Solunum yolu kısmi olarak tıkanmış bir kişide aşağıdakilerden hangisi görülür?",
    options: [
      "Nefes alamaz",
      "Öksürür",
      "Konuşamaz",
      "Karın ağrısı olur"
    ],
    correctAnswer: 1,
    explanation: "Solunum yolu kısmi olarak tıkandığında kişi öksürür. Tam tıkanmada ise nefes alamaz ve konuşamaz."
  },
  {
    id: 8,
    question: "Kafatası ve omurga yaralanmalarında ilk yardım nasıl olmalıdır?",
    options: [
      "Bilinci açıksa yürütülerek hastaneye götürülebilir",
      "Herhangi bir tehlike söz konusu ise kucakta taşıma tekniğiyle taşınır",
      "Baş-boyun-gövde ekseni bozulmamalıdır",
      "Boyun kırığı varsa boyun düzeltilmelidir"
    ],
    correctAnswer: 2,
    explanation: "Kafatası ve omurga yaralanmalarında baş-boyun-gövde ekseni korunmalı, hasta hareket ettirilmemelidir. Yanlış müdahale felce neden olabilir."
  },
  {
    id: 9,
    question: "Kazazedenin bilinci açık ve olay yerinde iki ilk yardımcı mevcut ise aşağıdaki taşıma tekniklerinden hangisi daha uygundur?",
    options: [
      "İtfaiyeci yöntemi",
      "Altın beşik",
      "Kucakta taşıma",
      "Sürükleme"
    ],
    correctAnswer: 1,
    explanation: "İki kişi mevcut olduğunda ve hasta bilinci açık ise altın beşik tekniği en güvenli taşıma yöntemidir. Bu teknik hasta konforunu da sağlar."
  },
  {
    id: 10,
    question: "Hasta-yaralı bir insanda solunum nasıl değerlendirilir?",
    options: [
      "Bak-Dinle-Hisset yöntemiyle",
      "RENTEK Yöntemiyle",
      "Hastanın ağzına bakılarak",
      "Şah damarından nabza bakılarak"
    ],
    correctAnswer: 0,
    explanation: "Solunum değerlendirmesi Bak-Dinle-Hisset yöntemiyle yapılır. Göğüs hareketlerine bakılır, solunum sesini dinlenir ve nefesi hissedilir."
  },
  {
    id: 11,
    question: "Cilt yolu ile olan zehirlenmelerde hangisinin yapılması yanlıştır?",
    options: [
      "Yaşam bulguları değerlendirilmelidir",
      "Cilt 15-20 dakika boyunca bol suyla yıkanmalıdır",
      "Zehir bulaşmış giysiler çıkarılmamalıdır",
      "Tıbbi yardım istenir"
    ],
    correctAnswer: 2,
    explanation: "Cilt yoluyla zehirlenmelerde zehir bulaşmış giysiler derhal çıkarılmalıdır. Bu, zehrin ciltten uzaklaştırılması için gereklidir."
  },
  {
    id: 12,
    question: "Bilinci kapalı olan hasta/yaralıyı uzak bir mesafeye taşımak gerekirse, aşağıdakilerden hangisi en uygun taşıma tekniğidir?",
    options: [
      "İtfaiyeci yöntemi ile taşıma",
      "Ayaklardan tutarak sürükleme",
      "Altın beşik",
      "RENTEK yöntemiyle taşıma"
    ],
    correctAnswer: 0,
    explanation: "Bilinci kapalı hastayı uzun mesafeye tek kişi taşımak gerektiğinde itfaiyeci yöntemi en uygun tekniktir. Bu yöntem hem güvenli hem de uzun mesafe taşımaya uygundur."
  },
  {
    id: 13,
    question: "Delici karın yaralanmalarında ilk yardımda aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Isı kaybını önlemek için hastanın üzeri örtülür",
      "Ağızdan hiçbir şey verilmez",
      "Dışa çıkan organlar içeri sokularak üzeri örtülür",
      "Yaşam bulguları sık sık değerlendirilir"
    ],
    correctAnswer: 2,
    explanation: "Delici karın yaralanmalarında dışa çıkan organlar kesinlikle içeri sokulmaz. Organlar nemli gazlı bezle örtülür ve tıbbi yardım beklenir."
  },
  {
    id: 14,
    question: "Dış kalp masajı ve yapay solunuma ne zaman son verilir?",
    options: [
      "10 dakika yapıldıktan sonra",
      "Sağlık ekibi gelince",
      "30 dakika yapıldıktan sonra",
      "Polis gelince"
    ],
    correctAnswer: 1,
    explanation: "Dış kalp masajı ve yapay solunum hasta kendiliğinden nefes alana kadar veya sağlık ekibi gelip müdahaleyi devralana kadar sürdürülmelidir."
  },
  {
    id: 15,
    question: "Solunum yolu ile zehirlenmelerde ilk yardım nasıl olmalıdır?",
    options: [
      "Hasta temiz havaya çıkarılır",
      "Yaşamsal belirtiler değerlendirilir",
      "Yan oturur pozisyonda tutulur",
      "Hepsi yapılır"
    ],
    correctAnswer: 3,
    explanation: "Solunum yolu ile zehirlenmelerde hasta temiz havaya çıkarılır, yaşamsal belirtiler değerlendirilir ve yan oturur pozisyonda tutulur. Tüm bu işlemler yapılmalıdır."
  },
  {
    id: 16,
    question: "Hangisi kimyasal yanıklara örnektir?",
    options: [
      "Elektrik ile oluşan yanık",
      "Sürtünme ile oluşan yanık",
      "Asit madde ile oluşan yanık",
      "Donma sonucu oluşan yanık"
    ],
    correctAnswer: 2,
    explanation: "Kimyasal yanıklar asit, alkali veya diğer kimyasal maddelerle oluşur. Asit madde ile oluşan yanık kimyasal yanık örneğidir."
  },
  {
    id: 17,
    question: "Kaza geçirmiş ve araç içinde sıkışmış bir yaralıyı eğer bir tehlike söz konusu ise omur iliğine zarar vermeden çıkarmak için kullanılan taşıma tekniği hangisidir?",
    options: [
      "Ayaklarından tutarak sürükleme",
      "RENTEK manevrası",
      "HEIMLICH manevrası",
      "Altın beşik"
    ],
    correctAnswer: 1,
    explanation: "RENTEK manevrası, araç içinde sıkışmış yaralıyı omur iliğine zarar vermeden acil durumlarda çıkarmak için kullanılan özel tekniktir."
  },
  {
    id: 18,
    question: "Elektrik yanıklarında ilk yardım nasıl olmalıdır?",
    options: [
      "Gerekirse yaralıya su ile müdahale edilebilir",
      "Hasar gören bölgenin üzeri açık bırakılmalıdır",
      "Yaralıya dokunmadan önce elektrik akımı kesilmelidir",
      "Su toplamış yerler patlatılmalıdır"
    ],
    correctAnswer: 2,
    explanation: "Elektrik yanıklarında öncelikle elektrik akımı kesilmelidir. Akım kesilmeden yaralıya dokunmak çok tehlikelidir ve ilk yardımcının da elektrik çarpmasına neden olabilir."
  },
  {
    id: 19,
    question: "Sıcak çarpmasında ilk yardım nasıl olmalıdır?",
    options: [
      "Hasta serin bir yere alınarak giysileri çıkarılır, sırtüstü yatırılır, kol ve bacakları yükseltilir ve ağızdan sıvı verilir",
      "Hasta koma pozisyonuna getirilir ve ağızdan hiç bir şey verilmez",
      "Hasta koma pozisyonuna getirilerek üzeri örtülür",
      "Hasta düz oturtularak öne doğru hafifçe eğilir ve ağızdan şekerli su verilir"
    ],
    correctAnswer: 0,
    explanation: "Sıcak çarpmasında hasta serin ve havadar yere alınır, giysileri çıkarılır, sırtüstü yatırılarak kol ve bacakları yükseltilir. Bilinci açıksa ağızdan sıvı verilebilir."
  },
  {
    id: 20,
    question: "Olay yerinin değerlendirilmesinin amacı nedir?",
    options: [
      "Olay yerindeki yaralı sayısını belirlemek",
      "Olay yerinde tekrar kaza olma riskini artırmak",
      "Olay yerindeki delilleri korumak",
      "Olay yerindeki ilk yardımcı sayısını belirlemek"
    ],
    correctAnswer: 0,
    explanation: "Olay yerinin değerlendirilmesi yaralı sayısını belirlemek, güvenliği sağlamak ve uygun müdahaleyi planlamak için yapılır. Bu, etkili ilk yardım için kritik öneme sahiptir."
  },
  {
    id: 21,
    question: "El ve ayak kopmalarında kopan parça ne yapılmalıdır?",
    options: [
      "Soğuk su dolu bir kap içine koyulmalıdır",
      "Savcı gelene kadar olay yerinde bırakılmalıdır",
      "Hasta ile birlikte uzuv ikinci bir poşete konarak en geç 6 saat içinde sağlık kuruluşuna gönderilmelidir",
      "Kopan parça bir torbanın içine koyulup polislere verilmelidir"
    ],
    correctAnswer: 2,
    explanation: "Kopan organ parçası önce temiz poşete, sonra buz-su karışımlı ikinci poşete konur ve hasta ile birlikte en geç 6 saat içinde sağlık kuruluşuna ulaştırılmalıdır. Bu süre reimplantasyon için kritiktir."
  },
  {
    id: 22,
    question: "Deri bütünlüğünün bozulduğu ve kemik uçlarının dışarı çıktığı kırık çeşidi hangisidir?",
    options: [
      "Kapalı kırık",
      "Çıkık",
      "Burkulma",
      "Açık kırık"
    ],
    correctAnswer: 3,
    explanation: "Açık kırık, kemik parçalarının deri bütünlüğünü bozarak dışarıya çıktığı kırık türüdür. Bu durumda enfeksiyon riski yüksektir ve acil tıbbi müdahale gerekir."
  },
  {
    id: 23,
    question: "Suda boğulmalarda yapılacak ilk yardımla ilgili verilenlerden hangisi yanlıştır?",
    options: [
      "Yaralı sudan çıkarılır",
      "Hasta sırt üstü yatırılıp karnına bastırılarak yuttuğu sular çıkarılmaya çalışılır",
      "Hastanın yaşamsal bulguları değerlendirilir",
      "Gerekiyorsa Temel Yaşam Desteği uygulanır"
    ],
    correctAnswer: 1,
    explanation: "Suda boğulmalarda karnına basarak su çıkarmaya çalışmak yanlıştır. Bu işlem aspirasyon riskini artırır ve zaman kaybına neden olur. Öncelik yaşamsal bulguları değerlendirmek ve gerekiyorsa TYD uygulamaktır."
  },
  {
    id: 24,
    question: "Bir yaşın altındaki bebeklerde göğüs kemiğinde belirlenen noktaya dış kalp masajı aşağıdaki tekniklerin hangisiyle uygulanır?",
    options: [
      "Bir elin topuğu ile",
      "İki elin topuğu ile",
      "İki parmakla",
      "Tek parmakla"
    ],
    correctAnswer: 2,
    explanation: "Bir yaşın altındaki bebeklerde kalp masajı iki parmakla (işaret ve orta parmak) uygulanır. Bebeklerin göğüs kafesi küçük ve narin olduğu için bu teknik daha uygun ve güvenlidir."
  },
  {
    id: 25,
    question: "Tek kişi ile yetişkin bir hastada kalp - akciğer canlandırması uygulaması sırasında verilmesi gereken soluk ile kalp masajı sayısı ne olmalıdır?",
    options: [
      "1 kalp masajı - 5 soluk",
      "30 kalp masajı - 2 soluk",
      "30 kalp masajı - 1 soluk",
      "15 kalp masajı - 2 soluk"
    ],
    correctAnswer: 1,
    explanation: "Yetişkinlerde tek kişilik CPR uygulamasında 30 kalp masajı - 2 soluk oranı kullanılır. Bu oran hem tek kişi hem de iki kişi CPR'da standarttır."
  },
  {
    id: 26,
    question: "Aşağıdaki durumların hangisinde OED cihazı kullanılmaz?",
    options: [
      "Gebeler ve kalp pili olanlarda",
      "6 aydan küçük bebeklerde",
      "OED çocuklar için uygun pedleri bulunmuyorsa",
      "Metal ve ıslak zeminde olan hastalarda"
    ],
    correctAnswer: 3,
    explanation: "OED (Otomatik Eksternal Defibrilatör) 6 aydan küçük bebeklerde kullanılmaz. Diğer durumlarda özel önlemler alınarak kullanılabilir."
  },
  {
    id: 27,
    question: "Aşağıdaki OED cihazı ile ilgili verilenlerden hangisi doğrudur?",
    options: [
      "Sadece sağlık çalışanları tarafından kullanılır",
      "OED, ani kalp durması sırasında göğse yapıştırılan pedler vasıtasıyla kalbe şok verilmesini sağlar",
      "OED cihazları sadece hastaların kalp ve solunumunu değerlendirir",
      "OED pedlerinin birbirine temas etmesine dikkat edilmelidir"
    ],
    correctAnswer: 1,
    explanation: "OED (Otomatik Eksternal Defibrilatör), ani kalp durması sırasında göğse yapıştırılan pedler vasıtasıyla kalbe elektrik şoku vererek normal kalp ritmini geri kazandırmayı amaçlayan bir cihazdır."
  },
  {
    id: 28,
    question: "Kaza geçirmiş ve araç içinde olan bir yaralıyı eğer bir tehlike söz konusu ise omuriliğine zarar vermeden çıkarmak için kullanılan taşıma tekniği hangisidir?",
    options: [
      "RENTEK manevrası",
      "Ayaklarından tutarak sürükleme",
      "Kucakta taşıma",
      "HEIMLICH manevrası"
    ],
    correctAnswer: 0,
    explanation: "RENTEK manevrası, araç içinde sıkışmış yaralıyı omuriliğine zarar vermeden acil durumlarda çıkarmak için kullanılan özel tekniktir. Bu manevra omurga stabilizasyonunu sağlar."
  },
  {
    id: 29,
    question: "Gaz ile oluşan solunum yolu zehirlenmelerinde aşağıdaki ilk yardım uygulamalarından hangisi yanlıştır?",
    options: [
      "Hasta temiz havaya çıkarılır ya da ortam havalandırılır",
      "HEIMLICH manevrası uygulanır",
      "Bilinci açıksa yarı oturur pozisyonda tutulur",
      "İlk yardımcı kendi güvenliğini almalıdır"
    ],
    correctAnswer: 1,
    explanation: "Gaz zehirlenmelerinde HEIMLICH manevrası uygulanmaz. Bu manevra sadece solunum yolu tıkanıklıklarında kullanılır. Gaz zehirlenmesinde öncelik temiz havaya çıkarmak ve yaşamsal bulguları değerlendirmektir."
  },
  {
    id: 30,
    question: "Hava yolu tam tıkanıklığı olan bir hastaya hangi ilk yardım uygulaması yapılmalıdır?",
    options: [
      "Kalp masajı yapılır",
      "RENTEK manevrası uygulanır",
      "Hasta öksürtülür",
      "HEIMLICH manevrası uygulanır"
    ],
    correctAnswer: 3,
    explanation: "Hava yolu tam tıkanıklığında HEIMLICH manevrası uygulanır. Bu manevra karın bölgesine ani basınç uygulayarak tıkanan cismin çıkarılmasını sağlar. Kısmi tıkanıklıkta ise hasta öksürmeye teşvik edilir."
  },
  {
    id: 31,
    question: "Kanamanın ciddiyeti aşağıdaki durumlardan hangisine bağlı değildir?",
    options: [
      "Kan grubuna",
      "Kanamanın hızına",
      "Vücutta kanın aktığı bölgeye",
      "Kanamanın miktarına"
    ],
    correctAnswer: 0,
    explanation: "Kanamanın ciddiyeti kan grubuna bağlı değildir. Kanamanın ciddiyeti; kanamanın hızı, miktarı ve vücutta kanın aktığı bölgeye bağlıdır. Kan grubu kanamanın şiddetini etkilemez."
  },
  {
    id: 32,
    question: "Bilinç kaybı olan kimselerde hava yolu açıklığı nasıl sağlanır?",
    options: [
      "2 kurtarıcı soluk verilerek",
      "Baş-çene pozisyonu vererek",
      "Bak-dinle-hisset metoduyla",
      "Ağız içi körlemesine temizlenerek"
    ],
    correctAnswer: 1,
    explanation: "Bilinç kaybı olan hastalarda hava yolu açıklığı baş-çene pozisyonu (head tilt-chin lift) vererek sağlanır. Bu pozisyon dilin arkaya düşmesini önler ve hava yolunu açar."
  },
  {
    id: 33,
    question: "Çocuklarda TYD uygulanırken göğüs kemiğinde belirlenen noktaya dış kalp masajı aşağıdaki tekniklerin hangisiyle uygulanır?",
    options: [
      "İki elin topuğu",
      "Tek parmakla",
      "İki parmakla",
      "Bir elin topuğu ile"
    ],
    correctAnswer: 3,
    explanation: "Çocuklarda (1-8 yaş arası) kalp masajı bir elin topuğu ile uygulanır. Bebeklerde iki parmak, yetişkinlerde iki elin topuğu kullanılır."
  },
  {
    id: 34,
    question: "Kavga sırasında bıçaklandığında ve nefes almakta zorlandığını söyleyen yetişkin bir kişinin yaranın olduğu yerden nefes alıyor görüntüsü verirse aşağıdakilerden hangisi ilk önce akla gelmelidir?",
    options: [
      "Delici karın yaralanması",
      "Delici göğüs yaralanması",
      "İç kanama",
      "Solunum yetmezliği"
    ],
    correctAnswer: 1,
    explanation: "Yaranın olduğu yerden nefes alıyor görüntüsü delici göğüs yaralanmasının (açık pnömotoraks) tipik belirtisidir. Bu durumda göğüs duvarında açıklık oluşmuş ve hava yarayla beraber giriş çıkış yapmaktadır."
  },
  {
    id: 35,
    question: "Delici göğüs yaralanmalarında ilk yardım nasıl olmalıdır?",
    options: [
      "Yara kesinlikle kapatılmamalıdır",
      "Yaranın üzerini tamamen kapatılmalıdır",
      "Yaranın üzerine kurumaması için nemlendirici krem sürülmelidir",
      "Yaranın üzeri üç tarafı kapalı bir tarafı açık olacak şekilde kapatılmalıdır"
    ],
    correctAnswer: 3,
    explanation: "Delici göğüs yaralanmalarında yaranın üzeri üç tarafı kapalı bir tarafı açık olacak şekilde kapatılmalıdır. Bu, hava çıkışına izin verirken içeri hava girmesini engeller ve gerilim pnömotoraksını önler."
  },
  {
    id: 36,
    question: "İlk yardımcı olarak bulunduğumuz bir kaza yerinde, kazazedelerden birinin morardığını, solunum zorluğu çektiğini ve kan tükürdüğünü gözlemlediniz. Bu durumda, aşağıdaki organlardan hangisinin yaralandığını düşünürsünüz?",
    options: [
      "Karaciğer",
      "Akciğer",
      "Pankreas",
      "Böbrek"
    ],
    correctAnswer: 1,
    explanation: "Morarma (siyanoz), solunum zorluğu ve kan tükürme (hemoptizi) akciğer yaralanmasının tipik belirtileridir. Bu bulgular akciğer dokusundaki hasar ve solunum fonksiyonunun bozulduğunu gösterir."
  },
  {
    id: 37,
    question: "Derlenme pozisyonu hangisidir?",
    options: [
      "Yarı oturur –yan pozisyon",
      "Yarı sırtüstü –yan yatar pozisyon",
      "Yüzükoyun –yan yatar pozisyon",
      "Yarı yüzükoyun –yan pozisyon"
    ],
    correctAnswer: 3,
    explanation: "Derlenme pozisyonu yarı yüzükoyun-yan pozisyondur. Bu pozisyon bilinci kapalı hastalarda hava yolunun açıklığını korur, kusma durumunda aspirasyonu önler ve hasta güvenliği için kullanılır."
  },
  {
    id: 38,
    question: "Hangi durumda turnike uygulanmaz?",
    options: [
      "Çok sayıda yaralının bulunduğu ortamda tek ilk yardımcı var ise",
      "Yaralı güç koşullarda bir yere taşınacaksa",
      "Yaralının ön kolunda kontrol edilebilir bir kanama var ise",
      "Uzuv kopması var ise ve bası noktalarına baskı uygulamak yeterli olmuyor ise"
    ],
    correctAnswer: 2,
    explanation: "Turnike kontrol edilebilir kanamalar için uygulanmaz. Ön kolda kontrol edilebilir bir kanama varsa önce basınçlı pansuman ve bası noktası teknikleri kullanılır. Turnike sadece yaşamı tehdit eden, kontrol edilemeyen kanamalar için son çare olarak uygulanır."
  },
  {
    id: 39,
    question: "Yüksek ateş nedeniyle oluşan havalede doğru olan hangisidir?",
    options: [
      "Hasta soğuk su ile dolu olan küvete sokulur",
      "Üzeri iyice örtülür",
      "Buzlu içecek verilir",
      "Hasta önce ıslak havlu ya da çarşafa sarılır, ateş düşmez ise oda sıcaklığında su dolu bir küvete sokulur"
    ],
    correctAnswer: 3,
    explanation: "Yüksek ateş nedeniyle oluşan havalede hasta önce ıslak havlu veya çarşafa sarılır. Ateş düşmezse oda sıcaklığında su dolu küvete sokulur. Ani soğutma şoka neden olabilir, bu nedenle kademeli soğutma tercih edilir."
  },
  {
    id: 40,
    question: "Aşağıdakilerden hangisi akrep sokmalarında ilk yardım uygulamaları için doğrudur?",
    options: [
      "Sokulan bölgeye sıcak uygulama yapılır",
      "Akrebin soktuğu yere kesi uygulanır",
      "Hasta hareketsiz uygun pozisyonda tutulur",
      "Sokulan bölgeden zehir emilerek uzaklaştırılır"
    ],
    correctAnswer: 2,
    explanation: "Akrep sokmalarında hasta hareketsiz ve uygun pozisyonda tutulmalıdır. Bu, zehirin dolaşımını yavaşlatır. Sıcak uygulama, kesi yapma veya zehir emme gibi uygulamalar zararlıdır ve yapılmamalıdır."
  },
  {
    id: 41,
    question: "Kırıklarda ilk yardım uygulaması ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Eklemleri içine almadan tespit etmek",
      "Şekil bozukluğunu düzeltip tespit etmek",
      "Eklemleri içine alacak şekilde tespit etmek",
      "Destek uygulamadan tespit etmek"
    ],
    correctAnswer: 2,
    explanation: "Kırıklarda atel (tespit) uygulanırken kırık bölgenin üst ve alt eklemlerini içine alacak şekilde tespit edilmelidir. Bu, kırık parçaların hareketini önler ve ağrıyı azaltır. Şekil bozukluğu düzeltilmeye çalışılmamalıdır."
  },
  {
    id: 42,
    question: "Dehidratasyon  ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Vücutta su kaybının su alımından fazla olması durumudur",
      "Sadece sıcak havalarda görülür",
      "Yalnızca yaşlılarda tehlikelidir",
      "İlk belirtisi her zaman bayılmadır"
    ],
    correctAnswer: 0,
    explanation: "Dehidratasyon, vücutta su kaybının su alımından fazla olması sonucu gelişen durumdur. Her yaşta görülebilir ve erken belirtileri arasında susuzluk hissi, ağız kuruluğu, baş dönmesi ve yorgunluk bulunur. Şiddetli dehidratasyonda ise bilinç bulanıklığı ve şok gelişebilir."
  },
  {
    id: 43,
    question: "Hipotermi ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Vücut sıcaklığının 35°C'nin altına düşmesi durumudur",
      "Sadece buzlu havalarda görülür",
      "İlk belirtisi her zaman bilinç kaybıdır",
      "Sadece yaşlı kişilerde görülür"
    ],
    correctAnswer: 0,
    explanation: "Hipotermi, vücut merkez sıcaklığının 35°C'nin (95°F) altına düşmesi durumudur. Soğuk hava, rüzgar, nem ve yetersiz giyim gibi faktörlerle gelişebilir. Erken belirtileri titreme, letarji, koordinasyon kaybı ve konuşma güçlüğüdür. Her yaş grubunda görülebilir."
  },
  {
    id: 44,
    question: "Denizanası sokması durumunda ilk yardım nasıl uygulanır?",
    options: [
      "Sokulan bölge hemen soğuk su ile yıkanır",
      "Dokunganlar elle çıkarılmaya çalışılır",
      "Kredi kartı gibi sert bir kart ile dokunganlar kazınır",
      "Sokulan bölgeye sıcak uygulama yapılır"
    ],
    correctAnswer: 2,
    explanation: "Denizanası sokmasında kredi kartı, plastik kart gibi sert bir nesne ile dokunganlar ciltten kazınarak çıkarılmalıdır. Elle dokunmak daha fazla zehir salınmasına neden olur. Sonrasında sıcak su (43-45°C) uygulanabilir."
  }
];

// Yeni sorular eklemek için bu formatta ekleyin:
/*
  {
    id: 10,
    question: "Yeni soru metni?",
    options: [
      "A seçeneği",
      "B seçeneği", 
      "C seçeneği",
      "D seçeneği"
    ],
    correctAnswer: 0, // 0=A, 1=B, 2=C, 3=D
    explanation: "Açıklama metni"
  }
*/
