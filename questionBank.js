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
    question: "Denizanası teması durumunda ilk yardım nasıl uygulanır?",
    options: [
      "Sokulan bölge hemen soğuk su ile yıkanır",
      "Dokunganlar elle çıkarılmaya çalışılır",
      "Kredi kartı gibi sert bir kart ile dokunganlar kazınır",
      "Sokulan bölgeye sıcak uygulama yapılır"
    ],
    correctAnswer: 2,
    explanation: "Denizanası sokmasında kredi kartı, plastik kart gibi sert bir nesne ile dokunganlar ciltten kazınarak çıkarılmalıdır. Elle dokunmak daha fazla zehir salınmasına neden olur. Sonrasında sıcak su (43-45°C) uygulanabilir."
  },
  {
    id: 45,
    question: "İlkyardım Nedir?",
    options: [
      "Olay yerinde ilaç vererek yapılan müdahaledir",
      "Hastanedeki hekimler tarafından yapılan ilk müdahaledir",
      "Olay yerinde, tıbbi araç ve gereç aranmaksızın mevcut imkânlarla yapılan ilaçsız müdahaledir",
      "Ambulansta doktor tarafından yapılan müdahaledir"
    ],
    correctAnswer: 2,
    explanation: "İlkyardım, olay yerinde tıbbi araç ve gereç aranmaksızın mevcut imkânlarla yapılan ilaçsız müdahaledir. Amacı yaşamı korumak, durumun kötüleşmesini önlemek ve tıbbi yardım gelene kadar hastayı stabilize etmektir."
  },
  {
    id: 46,
    question: "Olay yerinde, hayatın kurtarılması ya da hastanın durumunun daha da kötüleşmesini engellemek amacıyla ilaçsız olarak yapılan müdahaleye ne isim verilir?",
    options: [
      "Acil tedavi",
      "İlkyardım",
      "Acil müdahale",
      "Temel yaşam desteği"
    ],
    correctAnswer: 1,
    explanation: "İlkyardım, olay yerinde hayatın kurtarılması veya hastanın durumunun kötüleşmesini engellemek amacıyla, tıbbi araç-gereç kullanmadan ve ilaçsız olarak yapılan müdahaledir."
  },
  {
    id: 47,
    question: "Hangisi ilkyardımın öncelikli amaçlarındandır?",
    options: [
      "Hayati tehlikeyi ortadan kaldırmak",
      "İyileşmeyi kolaylaştırmak, Kazazedenin durumunun kötüleşmesini önlemek",
      "Yaşamsal fonksiyonların sürdürülmesini sağlamak",
      "Hepsi doğru"
    ],
    correctAnswer: 3,
    explanation: "İlkyardımın temel amaçları; hayati tehlikeyi ortadan kaldırmak, iyileşmeyi kolaylaştırmak, kazazedenin durumunun kötüleşmesini önlemek ve yaşamsal fonksiyonların sürdürülmesini sağlamaktır. Bu seçeneklerin hepsi ilkyardımın öncelikli amaçlarıdır."
  },
  {
    id: 48,
    question: "Türkiye'de hastanın en yakın sağlık kuruluşuna sevkini sağlamak amacıyla hangi telefon numarası aranmalıdır?",
    options: [
      "110",
      "155",
      "114",
      "112"
    ],
    correctAnswer: 3,
    explanation: "Türkiye'de acil sağlık hizmetleri için 112 numarası aranır. Bu numara 7/24 hizmet verir ve hastanın en yakın sağlık kuruluşuna sevkini sağlar. 110 polis, 155 jandarma, 114 yangın söndürme numaralarıdır."
  },
  {
    id: 49,
    question: "Aşağıdakilerden hangisi ilkyardımın öncelikli amaçları arasında değildir?",
    options: [
      "Hayati tehlikeyi ortadan kaldırmak",
      "İyileşmeyi kolaylaştırmak",
      "Yaşamsal fonksiyonların sürdürülmesini sağlamak",
      "İlaç vererek tedavi etmek"
    ],
    correctAnswer: 3,
    explanation: "İlaç vererek tedavi etmek ilkyardımın amacı değildir. İlkyardım ilaçsız müdahaledir. İlkyardımın temel amaçları; hayati tehlikeyi ortadan kaldırmak, iyileşmeyi kolaylaştırmak ve yaşamsal fonksiyonların sürdürülmesini sağlamaktır."
  },
  {
    id: 50,
    question: "Yetişkin bir insanda dakikadaki normal nabız sayısı kaçtır?",
    options: [
      "50-80 arası",
      "60-100 arası",
      "110-130 arası",
      "60-150 arası"
    ],
    correctAnswer: 1,
    explanation: "Yetişkin bir insanda dakikadaki normal nabız sayısı 60-100 arasıdır. 60'ın altında bradikardi, 100'ün üzerinde taşikardi olarak değerlendirilir. Bu değerler dinlenme halindeki nabız değerleridir."
  },
  {
    id: 51,
    question: "Hangisi dolaşım sistemini oluşturan organlardan birisidir?",
    options: [
      "Bağırsak",
      "Kalp",
      "Akciğerler",
      "Kaslar"
    ],
    correctAnswer: 1,
    explanation: "Kalp dolaşım sisteminin ana organıdır. Dolaşım sistemi kalp, kan damarları (atardamar, toplardamar, kılcal damarlar) ve kandan oluşur. Kalp kanı vücuda pompalayan merkezi organdır."
  },
  {
    id: 52,
    question: "Hangisi solunum sistemini oluşturan organlardan birisidir?",
    options: [
      "Kalp",
      "Beyin",
      "Akciğerler",
      "Kemikler"
    ],
    correctAnswer: 2,
    explanation: "Akciğerler solunum sisteminin ana organıdır. Solunum sistemi burun, ağız, yutak, gırtlak, soluk borusu, bronşlar ve akciğerlerden oluşur. Akciğerler gaz değişiminin gerçekleştiği organlardır."
  },
  {
    id: 53,
    question: "Vücuda gerekli olan gaz alışverişi görevini yaparak hücre ve dokuların oksijenlenmesini sağlayan vücut sistemi hangisidir?",
    options: [
      "Hareket sistemi",
      "Boşaltım sistemi",
      "Sindirim sistemi",
      "Solunum sistemi"
    ],
    correctAnswer: 3,
    explanation: "Solunum sistemi vücuda gerekli olan gaz alışverişi görevini yapar. Oksijeni alarak karbondioksiti dışarı verir, böylece hücre ve dokuların oksijenlenmesini sağlar. Bu yaşamsal fonksiyon için kritik öneme sahiptir."
  },
  {
    id: 54,
    question: "Erişkin bir insanın dakikadaki solunum sayısı normalde ne kadardır?",
    options: [
      "12 – 20",
      "8 – 10",
      "20 – 25",
      "2 – 30"
    ],
    correctAnswer: 0,
    explanation: "Erişkin bir insanın dakikadaki normal solunum sayısı 12-20 arasıdır. Bu değerler dinlenme halindeki solunum sayısıdır. 12'nin altında bradipne, 20'nin üzerinde takipne olarak değerlendirilir."
  },
  {
    id: 55,
    question: "Bir insanın normal vücut ısısı koltuk altından ölçüldüğünde ne kadardır?",
    options: [
      "35°C",
      "36.5°C",
      "38°C",
      "38.5°C"
    ],
    correctAnswer: 1,
    explanation: "Normal vücut ısısı koltuk altından ölçüldüğünde 36.5°C'dir. Ağızdan ölçümde 37°C, rektal ölçümde ise 37.5°C normal kabul edilir. 38°C ve üzeri ateş olarak değerlendirilir."
  },
  {
    id: 56,
    question: "Kaza yapmış bir aracın yanına gelindiğinde ilk olarak aşağıdakilerden hangisi yapılır?",
    options: [
      "Çekilmişse el freni indirilmeli",
      "Hasta/yaralı hemen araçtan çıkarılmalı",
      "Aracın kontağı kapatılmalı",
      "Hemen 110 aranmalı"
    ],
    correctAnswer: 2,
    explanation: "Kaza yapmış bir aracın yanına gelindiğinde ilk olarak aracın kontağı kapatılmalıdır. Bu, yangın ve elektrik çarpması riskini azaltır. Daha sonra güvenlik sağlanarak yaralılara müdahale edilir."
  },
  {
    id: 57,
    question: "Hangisi olay yerinin değerlendirilmesi sırasında yapılması gereken işlerdendir?",
    options: [
      "Meraklı kişiler olay yerinden uzaklaştırılmalıdır",
      "Kazaya uğrayan araç mümkünse güvenli bir yere alınmalıdır",
      "Olay yeri yeterince görünebilir şekilde işaretlenmelidir",
      "Hepsi doğru"
    ],
    correctAnswer: 3,
    explanation: "Olay yeri değerlendirilmesi sırasında meraklı kişilerin uzaklaştırılması, aracın güvenli yere alınması ve olay yerinin görünür şekilde işaretlenmesi gibi tüm güvenlik önlemleri alınmalıdır. Bu işlemler hem yaralıların hem de ilk yardımcıların güvenliği için kritiktir."
  },
  {
    id: 58,
    question: "Hasta yaralının değerlendirilmesinde hangi işlemler yapılmalıdır?",
    options: [
      "Çevre güvenliği sağlanır",
      "Bilinç kontrolü yapılır",
      "İlkyardımın ABC si değerlendirilir",
      "Hepsi doğru"
    ],
    correctAnswer: 3,
    explanation: "Hasta/yaralının değerlendirilmesinde önce çevre güvenliği sağlanır, sonra bilinç kontrolü yapılır ve ardından ilkyardımın ABC'si (Airway-Solunum yolu, Breathing-Solunum, Circulation-Dolaşım) değerlendirilir. Bu işlemlerin hepsi sistematik yaklaşımın kritik bileşenleridir."
  },
  {
    id: 59,
    question: "Aşağıdakilerden hangisi yaşam bulgularından değildir?",
    options: [
      "Bilinç",
      "Solunum, dolaşım",
      "Vücut ısısı",
      "Boşaltım"
    ],
    correctAnswer: 3,
    explanation: "Yaşam bulguları bilinç, solunum, dolaşım (nabız) ve vücut ısısından oluşur. Boşaltım yaşam bulguları arasında yer almaz. Bu bulgular hastanın yaşamsal durumunu değerlendirmek için kullanılır."
  },
  {
    id: 60,
    question: "Dış kalp masajı ve yapay solunuma ne zaman son verilir?",
    options: [
      "10 dakika yapıldıktan sonra",
      "Sağlık ekibi gelince",
      "30 dakika yapıldıktan sonra",
      "5 tur yaptıktan sonra"
    ],
    correctAnswer: 1,
    explanation: "Dış kalp masajı ve yapay solunum hasta kendiliğinden nefes alana kadar veya sağlık ekibi gelip müdahaleyi devralana kadar sürdürülmelidir. Belirli bir süre sınırı yoktur, yaşamsal bulguların geri dönmesi veya profesyonel yardımın gelmesi beklenir."
  },
  {
    id: 61,
    question: "Hava yolunda tam tıkanıklık olan bilinci açık bir hastaya ilkyardımda ne yapılmalıdır?",
    options: [
      "Karına bası uygulanır (Heimlich manevrası)",
      "Kalp masajı yapılır",
      "Hasta öksürtülür",
      "Şok pozisyonu verilir"
    ],
    correctAnswer: 0,
    explanation: "Hava yolunda tam tıkanıklık olan bilinci açık hastaya Heimlich manevrası (karına bası) uygulanır. Bu manevra ani basınç yaratarak tıkanan cismin çıkarılmasını sağlar. Kısmi tıkanıklıkta ise hasta öksürmeye teşvik edilir."
  },
  {
    id: 62,
    question: "Solunum yolu tam olarak tıkanmış bir kişide aşağıdakilerden hangisi görülür?",
    options: [
      "Öksürür",
      "Derin nefes alır",
      "Konuşamaz",
      "Konuşabilir"
    ],
    correctAnswer: 2,
    explanation: "Solunum yolu tam olarak tıkandığında kişi konuşamaz, nefes alamaz ve ses çıkaramaz. Kısmi tıkanıklıkta öksürür ve konuşabilir. Tam tıkanıklık yaşamı tehdit eden acil bir durumdur ve derhal Heimlich manevrası uygulanmalıdır."
  },
  {
    id: 63,
    question: "Yetişkinlerde yapılan dış kalp masajıyla ilgili yazılanlardan hangisi doğrudur?",
    options: [
      "Kalp masajı tek elle yapılır",
      "Kalp masajı yapılırken hastaya uzak durulmalıdır",
      "Göğse baskı uygulanırken kollar bükülmeden vücut ağırlığıyla baskı uygulanır",
      "Kalp masajı göğüs kemiğinin altına uygulanır"
    ],
    correctAnswer: 2,
    explanation: "Yetişkinlerde dış kalp masajı yapılırken kollar düz tutulur ve vücut ağırlığıyla baskı uygulanır. Bu, etkili ve yorucu olmayan bir teknik sağlar. Kalp masajı iki elle, göğüs kemiğinin alt yarısına uygulanır ve masaj sırasında hastaya yakın durulur."
  },
  {
    id: 64,
    question: "Baş çene pozisyonunun amacı nedir?",
    options: [
      "Kişiyi beslemek için",
      "Kişiye su içirmek için",
      "Solunum yolunu kapatarak soluk borusuna bir şey kaçmasını önlemek",
      "Dil kökünün soluk borusunu kapatmasını önleyerek havayolunu açmak"
    ],
    correctAnswer: 3,
    explanation: "Baş-çene pozisyonu (head tilt-chin lift), bilinç kaybı olan hastalarda dil kökünün soluk borusunu kapatmasını önlemek ve hava yolunu açmak için uygulanır. Bu pozisyon dilin arkaya düşmesini engeller ve etkili solunum sağlar."
  },
  {
    id: 65,
    question: "Ağız içi kontrolü ne zaman yapılır?",
    options: [
      "Bilinç kontrolünden önce",
      "Baş çene pozisyonundan sonra",
      "Bilinç kontrolünden sonra",
      "İkinci değerlendirmeden önce"
    ],
    correctAnswer: 1,
    explanation: "Ağız içi kontrolü baş-çene pozisyonu verildikten sonra yapılır. Önce bilinç kontrol edilir, sonra baş-çene pozisyonu verilir ve ardından ağız içi görünür yabancı cisimler için kontrol edilir. Bu sistematik yaklaşım hava yolu açıklığını sağlamak için kritiktir."
  },
  {
    id: 66,
    question: "Ağız içi kontrolü ne amaçla yapılır?",
    options: [
      "En son ne yediğini anlamak için",
      "Dişlerini saymak için",
      "Yaralının alkol alıp almadığını anlamak için",
      "Ağız içinde bulunabilecek materyallerin solunum yolunu tıkamaması için"
    ],
    correctAnswer: 3,
    explanation: "Ağız içi kontrolü, ağız içinde bulunabilecek yabancı cisimler, yiyecek artıkları, takma diş gibi materyallerin solunum yolunu tıkamaması için yapılır. Bu kontrol hava yolu açıklığını sağlamak ve etkili solunum için kritik öneme sahiptir."
  },
  {
    id: 67,
    question: "Yetişkinlerde Kalp basısı sırasında göğüs kafesi ne kadar çöktürülmelidir?",
    options: [
      "Göğüs kafesinin 1/2 si kadar",
      "Göğüs kafesinin 1/3 ü kadar",
      "Göğüs kafesinin 1/4 ü kadar",
      "Göğüs kafesinin 1/5 i kadar"
    ],
    correctAnswer: 1,
    explanation: "Yetişkinlerde kalp masajı sırasında göğüs kafesi 1/3'ü kadar (yaklaşık 5-6 cm) çöktürülmelidir. Bu derinlik etkili kalp masajı için gereklidir ve kalbin yeterince sıkıştırılmasını sağlar. Çok sığ veya çok derin basınç etkisizdir ve zararlı olabilir."
  },
  {
    id: 68,
    question: "Solunum yolu tam tıkanmış ve bilinci açık kişiye ne yapılır?",
    options: [
      "Öksürmeye teşvik edilir",
      "Sırtına vurulur",
      "Heimlich manevrası(Karına bası) uygulanır",
      "Rentek Manevrası uygulanır"
    ],
    correctAnswer: 2,
    explanation: "Solunum yolu tam tıkanmış ve bilinci açık kişiye Heimlich manevrası (karına bası) uygulanır. Bu manevra ani basınç yaratarak tıkanan cismin çıkarılmasını sağlar. Öksürmeye teşvik etmek kısmi tıkanıklıkta yapılır. Tam tıkanıklıkta kişi zaten öksüremez ve konuşamaz."
  },
  {
    id: 69,
    question: "Hangisi tam tıkanma belirtisi değildir?",
    options: [
      "Nefes alamaz",
      "Acı çeker gibi elini boynuna götürür",
      "Su içebilir",
      "Konuşamaz, rengi morarmıştır"
    ],
    correctAnswer: 2,
    explanation: "Su içebilmek tam tıkanma belirtisi değildir. Tam tıkanmada kişi nefes alamaz, konuşamaz, rengi morarır ve genellikle elini boynuna götürerek evrensel boğulma işareti yapar. Su içebiliyorsa bu kısmi tıkanma işaretidir çünkü hava yolu tamamen kapanmamıştır."
  },
  {
    id: 70,
    question: "Solunum yolu kısmi tıkanmış kişiye ne yapılır?",
    options: [
      "Öksürmeye teşvik edilir",
      "Su verilir",
      "Temel Yaşam Desteği uygulanır",
      "Heimlich manevrası(Karına bası) uygulanır"
    ],
    correctAnswer: 0,
    explanation: "Solunum yolu kısmi tıkanmış kişi öksürmeye teşvik edilir. Kısmi tıkanmada kişi hala öksürebilir ve konuşabilir, bu nedenle doğal öksürme refleksi ile yabancı cismin çıkarılması sağlanmaya çalışılır. Heimlich manevrası sadece tam tıkanmalarda uygulanır."
  },
  {
    id: 71,
    question: "Kanama çeşitleriyle ilgili verilenlerden hangisi yanlıştır?",
    options: [
      "Toplardamar kanaması sızıntı şeklinde akar",
      "Atardamar kanaması sızıntı şeklinde akar",
      "Atardamar kanaması kesik kesik ve fışkırır tarzda akar",
      "Kılcal damar kanaması küçük kabarcıklar şeklinde görülür"
    ],
    correctAnswer: 1,
    explanation: "Atardamar kanaması sızıntı şeklinde akmaz, bu yanlış bir ifadedir. Atardamar kanaması kalbin atışıyla kesik kesik ve fışkırır tarzda akar, kırmızı renklidir. Toplardamar kanaması sızıntı şeklinde akar ve koyu renklidir. Kılcal damar kanaması ise küçük kabarcıklar şeklinde görülür."
  },
  {
    id: 72,
    question: "Aşağıdakilerden hangisi atardamar kanamasının özelliğidir?",
    options: [
      "Kesik kesik akar",
      "Sızıntı şeklinde akar",
      "Koyu renklidir",
      "Küçük kabarcıklar şeklindedir"
    ],
    correctAnswer: 0,
    explanation: "Atardamar kanaması kesik kesik akar. Bu, kalbin atışıyla nabızla uyumlu şekilde fışkırır tarzda akan kanamanın karakteristik özelliğidir. Atardamar kanaması ayrıca kırmızı renklidir ve acil müdahale gerektirir. Sızıntı şeklinde akmak toplardamar kanamasının, küçük kabarcıklar şeklinde olmak ise kılcal damar kanamasının özelliğidir."
  },
  {
    id: 73,
    question: "İç kanamalarda ilkyardımda aşağıdakilerden hangisi yapılmaz?",
    options: [
      "Ağızdan sıvı verilerek kayıp önlenir",
      "Şok pozisyonu verilir, Üzeri örtülerek sıcak tutulur",
      "Yaşamsal bulguları incelenir",
      "Hareket ettirilmez"
    ],
    correctAnswer: 0,
    explanation: "İç kanamalarda ağızdan sıvı verilmez. Bu, kusma riskini artırabilir ve durumu kötüleştirebilir. İç kanamalarda şok pozisyonu verilir, hasta sıcak tutulur, yaşamsal bulgular takip edilir ve hasta hareket ettirilmez. Acil tıbbi yardım için 112 aranmalıdır."
  },
  {
    id: 74,
    question: "Damar bütünlüğünün bozulması sonucu kanın damar dışına doğru akmasına ne isim verilir?",
    options: [
      "Kanama",
      "Kırık",
      "Çıkık",
      "Burkulma"
    ],
    correctAnswer: 0,
    explanation: "Damar bütünlüğünün bozulması sonucu kanın damar dışına doğru akmasına kanama denir. Kırık kemik dokusunda, çıkık eklem yerinden çıkmasında, burkulma ise bağ yaralanmasında görülür. Kanama atardamar, toplardamar veya kılcal damar yaralanması sonucu oluşabilir."
  },
  {
    id: 75,
    question: "Hangi durumda turnike uygulanabilir?",
    options: [
      "Kanaması olan her hastada",
      "Çok sayıda kanamalı yaralının bulunduğu bir ortamda tek ilkyardımcı varsa",
      "Baş yaralanmalarında",
      "İç kanamalarda"
    ],
    correctAnswer: 1,
    explanation: "Turnike çok sayıda kanamalı yaralının bulunduğu bir ortamda tek ilk yardımcı varsa uygulanabilir. Bu durumda zaman kritiktir ve turnike hayat kurtarıcı olabilir. Turnike sadece ekstremite (kol-bacak) kanamalarında, kontrol edilemeyen şiddetli kanamalarda ve son çare olarak uygulanır. Baş yaralanmalarında ve iç kanamalarda uygulanamaz."
  },
  {
    id: 76,
    question: "Kanamalarda uygulanan ilkyardımda aşağıdakilerden hangisi yapılmaz?",
    options: [
      "Kanayan bölge aşağıya doğru indirilir",
      "Kanayan yere en yakın basınç noktasına baskı uygulanır",
      "Baskı uygulamak yeterli olmuyorsa turnike uygulanır",
      "Tıbbi yardım istenir"
    ],
    correctAnswer: 0,
    explanation: "Kanamalarda kanayan bölge aşağıya doğru indirilmez, aksine mümkünse kalp seviyesinin üstüne kaldırılır. Bu kan akışını yavaşlatır ve kanamanın kontrol edilmesini kolaylaştırır. Diğer seçeneklerin hepsi kanama kontrolünde yapılan doğru uygulamalardır."
  },
  {
    id: 77,
    question: "Kanamanın değerlendirilmesinde İlkyardımcı neyi izlemelidir?",
    options: [
      "Şok belirtilerini",
      "Tıkanma belirtilerini",
      "Şeker düşmesi belirtilerini",
      "Sağlık ekibinin ne kadar sürede geldiğini"
    ],
    correctAnswer: 0,
    explanation: "Kanamanın değerlendirilmesinde ilk yardımcı şok belirtilerini izlemelidir. Şiddetli kanama kan kaybına ve şoka neden olabilir. Şok belirtileri arasında nabızda hızlanma, kan basıncında düşme, ciltte solgunluk, soğuk terleme, huzursuzluk ve bilinç bulanıklığı bulunur. Bu belirtilerin erken tespiti hayat kurtarıcıdır."
  },
  {
    id: 78,
    question: "İç kanamada ilkyardımda neler yapılmalıdır?",
    options: [
      "Hastanın bilinci ve ABC si değerlendirilir",
      "Hastaya şok pozisyonu verilir",
      "Hareket ettirilmez yiyecek içecek verilmez, tıbbi yardım istenir",
      "Hepsi doğru"
    ],
    correctAnswer: 3,
    explanation: "İç kanamada tüm bu işlemler yapılmalıdır: Hastanın bilinci ve ABC'si (Airway-Breathing-Circulation) değerlendirilir, şok pozisyonu verilir, hasta hareket ettirilmez, ağızdan hiçbir şey verilmez ve acil tıbbi yardım istenir. İç kanama görülemeyen ancak yaşamı tehdit eden ciddi bir durumdur ve kapsamlı yaklaşım gerektirir."
  },
  {
    id: 79,
    question: "Turnike ne kadar sıkılmalıdır?",
    options: [
      "Kanama duruncaya kadar",
      "Kanama durduktan sonrada devam edilir",
      "Çubuğun döndüğü kadar",
      "İpin dayanma gücüne kadar"
    ],
    correctAnswer: 0,
    explanation: "Turnike kanama duruncaya kadar sıkılmalıdır. Kanama durduktan sonra daha fazla sıkmaya gerek yoktur, bu durum gereksiz doku hasarına neden olabilir. Turnike etkili bir şekilde uygulandığında kanama durur ve nabız alınamaz hale gelir. Amaç kanamanın kontrolüdür, aşırı sıkma zararlıdır."
  },
  {
    id: 80,
    question: "Şok nedir?",
    options: [
      "Ani gelişen bir dolaşım yetmezliğidir",
      "Uzun süren bilinç kaybıdır",
      "Ani bir haber duyunca görülen şaşkınlıktır",
      "Deprem sonrası oluşan artçı sarsıntılardır"
    ],
    correctAnswer: 0,
    explanation: "Şok, ani gelişen bir dolaşım yetmezliğidir. Bu durumda kalp, vücudun ihtiyaç duyduğu kan miktarını pompalayamaz ve dokuların oksijen ihtiyacı karşılanamaz. Şok hayatı tehdit eden ciddi bir durumdur ve acil müdahale gerektirir. Belirtileri arasında hızlı nabız, düşük kan basıncı, solgun cilt, soğuk terleme ve bilinç bulanıklığı bulunur."
  },
  {
    id: 81,
    question: "Şok belirtileri nelerdir?",
    options: [
      "Kan basıncında düşme, Soğuk terleme",
      "Hızlı ve zayıf nabız",
      "Endişe huzursuzluk",
      "Hepsi doğru"
    ],
    correctAnswer: 3,
    explanation: "Şok belirtileri çok çeşitlidir ve hepsini bilmek hayat kurtarıcıdır: Kan basıncında düşme ve soğuk terleme, hızlı ve zayıf nabız, endişe ve huzursuzluk şokun temel belirtileridir. Bunlara ek olarak ciltte solgunluk, nefes almada güçlük, bilinç bulanıklığı, susuzluk hissi ve vücut ısısında düşme de görülebilir. Tüm bu belirtiler dokuların yetersiz oksijen almasından kaynaklanır."
  },
  {
    id: 82,
    question: "Bir travma sonucu deri yada mukozanın bütünlüğünün bozulmasına ne isim verilir?",
    options: [
      "Kanama",
      "Yara",
      "Ağrı",
      "Şok"
    ],
    correctAnswer: 1,
    explanation: "Bir travma sonucu deri veya mukoza bütünlüğünün bozulmasına yara denir. Yara, vücudun koruyucu bariyerinin zarar görmesi anlamına gelir ve enfeksiyon riski oluşturur. Kanama yaranın bir sonucu olabilir, ağrı yaranın belirtisi, şok ise ciddi yaralanmaların komplikasyonudur. Yara tanımı, doku bütünlüğünün bozulmasını ifade eden temel tıbbi terimdir."
  },
  {
    id: 83,
    question: "Delici göğüs yaralanmalarında ilkyardım nasıl olmalıdır?",
    options: [
      "Bilinç Kontrolü yapılır, yaşam bulguları değerlendirilir",
      "Yaranın üzerini plastik poşet veya naylon sarılmış bir bezle kapatılır",
      "Ağızdan hiçbir şey verilmez",
      "Hepsi doğru"
    ],
    correctAnswer: 3,
    explanation: "Delici göğüs yaralanmalarında tüm bu işlemler yapılmalıdır: Bilinç kontrolü yapılır ve yaşam bulguları sürekli değerlendirilir, yaranın üzeri hava geçirmez plastik poşet veya naylon sarılmış bezle (üç tarafı kapalı bir tarafı açık olacak şekilde) kapatılır, ağızdan hiçbir şey verilmez ve derhal tıbbi yardım istenir. Bu yaralanmalar pnömotoraks riskini taşıdığı için özel dikkat gerektirir."
  },
  {
    id: 84,
    question: "Bir trafik kazası sonucu oluşan yaralanmaya müdahale edilirken, hangi durumda yaralıyı araçtan çıkarmalıyız?",
    options: [
      "Yaralı sıkışmamış ise ve bir tehlike yoksa",
      "Yaralının kol ve bacağında kırık varsa",
      "Bilinci yerinde ve herhangi bir tehlike söz konusu değilse",
      "Yaralının solunumu yoksa"
    ],
    correctAnswer: 3,
    explanation: "Yaralıyı araçtan çıkarma kararı hayati tehlike durumunda alınmalıdır. Yaralının solunumu yoksa, temel yaşam desteği uygulamak için düz ve sert zemine çıkarılması gerekebilir. Diğer durumlarda (sıkışmamış ve tehlike yoksa, kırık varsa, bilinç yerindeyse) hasta araç içinde stabilize edilmeli ve sağlık ekibinin gelmesi beklenmelidir. Gereksiz hareket omurga yaralanması riskini artırır."
  },
  {
    id: 85,
    question: "Özellikle hangi hastalarda baş boyun ve gövde ekseni bozulmamalıdır?",
    options: [
      "Kafatası ve omurga yaralanmalarında",
      "İç kanaması olan hastalar",
      "Bacak kırıklarında",
      "Kedi, köpek ısırmalarında"
    ],
    correctAnswer: 0,
    explanation: "Baş-boyun-gövde ekseni özellikle kafatası ve omurga yaralanmalarında bozulmamalıdır. Bu yaralanmalarda yanlış hareket etme, omurilikte hasara neden olarak felce yol açabilir. Spinal immobilizasyon kritik öneme sahiptir. İç kanama, bacak kırığı veya hayvan ısırıklarında bu kadar kritik değildir, ancak genel olarak tüm yaralanmalarda dikkatli hareket etmek önemlidir."
  },
  {
    id: 86,
    question: "Donmuş bir kişiye aşağıdakilerden hangisi yapılmaz?",
    options: [
      "Sıcak içecekler verilir",
      "Donmuş bölge hızla ovularak ısıtılır",
      "Kuru giysiler verilir, soğukla teması kesilir",
      "Su toplamış bölgeler patlatılmaz"
    ],
    correctAnswer: 1,
    explanation: "Donmuş bölge hızla ovularak ısıtılmaz. Bu işlem doku hasarını artırır ve çok ağrılıdır. Donmuş bölgeler yavaş yavaş ve dikkatli bir şekilde ılık suyla ısıtılmalıdır. Sıcak içecek verilebilir (alkollü değilse), kuru giysiler giydirilir, soğukla temas kesilir ve su toplamış bölgeler patlatılmaz. Ani ısıtma doku nekrozuna neden olabilir."
  },
  {
    id: 87,
    question: "Kemik bütünlüğünün bozulmasına ne isim verilir?",
    options: [
      "Çıkık",
      "Kırık",
      "Burkulma",
      "Eklem"
    ],
    correctAnswer: 1,
    explanation: "Kemik bütünlüğünün bozulmasına kırık denir. Kırık, kemik dokusunda çatlak veya tam kopma olarak ortaya çıkar. Çıkık eklemin yerinden çıkması, burkulma ise bağların zarar görmesi anlamına gelir. Eklem ise kemiklerin birleştiği yerdir ve yaralanma türü değildir. Kırıklar kapalı veya açık olarak sınıflandırılır ve atel uygulaması ile stabilize edilir."
  },
  {
    id: 88,
    question: "Aşağıdaki şıkların hangisinde kırık çeşitleri doğru olarak yazılmıştır?",
    options: [
      "Uzun kırık, kısa kırık",
      "Kapalı kırık, açık kırık",
      "Kalın kırık, ince kırık",
      "Büyük kırık, küçük kırık"
    ],
    correctAnswer: 1,
    explanation: "Kırıklar temel olarak kapalı kırık ve açık kırık olmak üzere ikiye ayrılır. Kapalı kırıkta deri bütünlüğü korunur ve kemik parçaları dışarı çıkmaz. Açık kırıkta ise deri bütünlüğü bozulur ve kemik parçaları dışarıya çıkar. Bu sınıflandırma enfeksiyon riski ve tedavi yöntemi açısından kritik öneme sahiptir. Diğer seçeneklerde (uzun-kısa, kalın-ince, büyük-küçük) verilen terimler tıbbi kırık sınıflandırmasında kullanılmaz."
  },
  {
    id: 89,
    question: "Hangi çıkıkta ilkyardımcı çıkan eklemi yerine oturtmalıdır?",
    options: [
      "Omuz çıkıklarında",
      "El bileği çıkıklarında",
      "Parmaklardaki çıkıklarda",
      "Hiçbirinde"
    ],
    correctAnswer: 3,
    explanation: "İlk yardımcı hiçbir çıkıkta eklemi yerine oturtmaya çalışmamalıdır. Çıkık durumunda eklem immobilize edilir (tespit edilir), hasta ağrıyı azaltacak pozisyonda tutulur ve derhal tıbbi yardım istenir. Çıkığı yerine oturtmaya çalışmak sinir, damar ve yumuşak doku hasarına neden olabilir. Bu işlem ancak eğitimli sağlık personeli tarafından yapılmalıdır."
  },
  {
    id: 90,
    question: "Kısa süreli, yüzeysel ve geçici bilinç kaybına ne isim verilir?",
    options: [
      "Koma",
      "Bayılma",
      "Baş dönmesi",
      "Kalp krizi"
    ],
    correctAnswer: 1,
    explanation: "Kısa süreli, yüzeysel ve geçici bilinç kaybına bayılma (senkop) denir. Bayılma genellikle beyne giden kan akımının geçici olarak azalması sonucu oluşur ve kendiliğinden düzelir. Koma uzun süreli ve derin bilinç kaybıdır. Baş dönmesi bilinç kaybı olmaksızın yaşanan bir durumdur. Kalp krizi ise kalp kasının oksijen yetersizliğinden dolayı hasar görmesidir."
  },
  {
    id: 91,
    question: "Vücuda yabancı bir maddenin girmesi sonucu normal fonksiyonların bozulmasına ne isim verilir?",
    options: [
      "Kanama",
      "Kırık",
      "Sara",
      "Zehirlenme"
    ],
    correctAnswer: 3,
    explanation: "Vücuda yabancı bir maddenin girmesi sonucu normal fonksiyonların bozulmasına zehirlenme denir. Zehirlenme solunum yolu, sindirim yolu, cilt yolu veya damar yolu ile gerçekleşebilir. Kanama damar bütünlüğünün bozulması, kırık kemik bütünlüğünün bozulması, sara ise nörolojik bir hastalıktır. Zehirlenme vakalarında derhal tıbbi yardım alınmalı ve mümkünse zehirleyici maddenin türü belirlenmelidir."
  },
  {
    id: 92,
    question: "Zehirlenmelerin genel belirtisi aşağıdakilerden hangisidir?",
    options: [
      "Sinir Sistemi bozuklukları",
      "Dolaşım, Solunum Sistemi bozuklukları",
      "Sindirim sistemi bozuklukları",
      "Hepsi doğru"
    ],
    correctAnswer: 3,
    explanation: "Zehirlenmelerin genel belirtileri çok çeşitlidir ve tüm vücut sistemlerini etkileyebilir. Sinir sistemi bozuklukları (bilinç bulanıklığı, konvülziyon, baş ağrısı), dolaşım ve solunum sistemi bozuklukları (nabız değişiklikleri, solunum güçlüğü), sindirim sistemi bozuklukları (bulantı, kusma, karın ağrısı) zehirlenmelerde görülebilir. Zehirleyici maddenin türüne göre belirtiler değişiklik gösterebilir ancak genellikle birden fazla sistem etkilenir."
  },
  {
    id: 93,
    question: "Buruna yabancı cisim kaçmasında ilkyardım nasıl olmalıdır?",
    options: [
      "Sivri bir cisimle çıkarılır",
      "Su ile yıkanarak çıkarılır",
      "Burun duvarına bastırarak kuvvetli bir nefes verme ile cismin atılması sağlanır",
      "Burun delikleri sıkılarak oturtulur"
    ],
    correctAnswer: 2,
    explanation: "Buruna yabancı cisim kaçmasında temiz olan burun deliği kapatılır, cismin bulunduğu burun duvarına bastırılarak ağızdan kuvvetli bir nefes verme ile cismin atılması sağlanır. Sivri cisimlerle müdahale etmek cismi daha derine itebilir ve burun dokusuna zarar verebilir. Su ile yıkama da cismi daha derine itme riskini taşır. Bu yöntem işe yaramazsa derhal tıbbi yardım alınmalıdır."
  },
  {
    id: 94,
    question: "RENTEK manevrası ile yaralı araçtan çıkarılmadan önce hangilere bakılmalıdır?",
    options: [
      "Arabanın kontağı kapatılır.",
      "Yaralının solunumu kontrol edilmelidir.",
      "Yaralının emniyet kemeri takılıysa çıkarılmalı, ayakları sıkışmış mı kontrol edilmelidir.",
      "Hepsi yapılmalıdır."
    ],
    correctAnswer: 3,
    explanation: "RENTEK manevrası uygulanmadan önce tüm güvenlik önlemleri alınmalıdır: Arabanın kontağı kapatılarak yangın riski minimize edilir, yaralının solunum durumu değerlendirilerek aciliyet belirlenir, emniyet kemeri varsa güvenli şekilde çıkarılır ve ayakların sıkışıp sıkışmadığı kontrol edilir. Bu değerlendirmeler hem yaralının hem de kurtarıcının güvenliği için kritik öneme sahiptir ve RENTEK manevrası öncesi mutlaka yapılmalıdır."
  },
  {
    id: 95,
    question: "RENTEK Manevrası hangi hallerde kullanılır?",
    options: [
      "Dar bir tünelde sıkışmış kişiyi kurtarmak için",
      "Kaza geçirmiş kişiyi teskin edip sakinleşmesini sağlamak için",
      "Eğer tehlikeli bir durum varsa (Solunum durması, patlama ihtimali v.s.) omuriliği zedelemeden araçtan çıkarmak için",
      "Herhangi bir tehlike söz konusu değilse"
    ],
    correctAnswer: 2,
    explanation: "RENTEK manevrası sadece tehlikeli durumlar söz konusu olduğunda kullanılır. Solunum durması, patlama ihtimali, yangın riski, elektrik çarpması tehlikesi gibi acil durumlar varsa yaralıyı omuriliği zedelemeden araçtan güvenli şekilde çıkarmak için uygulanır. Normal şartlarda hasta araç içinde stabilize edilmeli ve sağlık ekibi beklenmeli, gereksiz hareket ettirilmemelidir. Bu manevra yaşam kurtarmak için son çare olarak kullanılan özel bir tekniktir."
  },
  // Sample new question - you can add more questions here:
  {
    id: 96,
    question: "Elektrik çarpması durumunda ilk olarak ne yapılmalıdır?",
    options: [
      "Derhal yaralıya dokunulur",
      "Elektrik kaynağı kapatılır veya yaralı elektrikten uzaklaştırılır",
      "Yaralıya su dökülür",
      "Hemen kalp masajına başlanır"
    ],
    correctAnswer: 1,
    explanation: "Elektrik çarpması durumunda öncelikle güvenlik sağlanmalı, elektrik kaynağı kapatılmalı veya yaralı elektrikten güvenli bir şekilde uzaklaştırılmalıdır. Yaralıya elektrik geçmeye devam ediyorken dokunmak tehlikelidir."
  }
];
/*
  {
    id: 97,
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
