var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibmFveWFhIiwiYSI6ImNsMXFqeml0ejE1bWQzam10b2RoZHFrNjcifQ.shfDTmh_FOVM-vFy_y7l0Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '石川百万石',
    subtitle: 'GPSアートで石川を描く',
    byline: 'Naoya＆Tomoki',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '松尾芭蕉',
            image: './path/to/image/source.png',
            description: '開湯1300年の歴史を持つ山中温泉は、芭蕉が称賛した日本三大名湯の1つ。1689年夏、奥の細道の道中、松尾芭蕉は山中温泉に長期にわたって滞在しました。山中温泉の数々の名所旧跡には芭蕉の句が残されています。',
            location: {
                center: [36.24854378863617, 136.3728248348754],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '野球',
            image: './path/to/image/source.png',
            description: '巨人・NYヤンキースで活躍した松井秀喜さんは石川県能美市出身。松井秀喜ベースボールミュージアムを起点に松井さんの母校（浜小学校、根上中学）をはじめ、根上りの松、弁慶謝罪の地などを巡ります。',
            location: {
                center: [36.43722260053623, 136.5403660209581],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '考える人',
            image: './path/to/image/source.png',
            description: 'かほく市が生んだ日本近代哲学の偉人、西田幾多郎。幾多郎の生誕地から生い立ちの地、西田幾多郎哲学館、哲学の道、幾多郎のお墓など幾多郎のルーツを巡っていくと、「考える人」が町に浮かびあがります。',
            location: {
                center: [36.74188925300345, 136.73031408490027],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'フグ',
            image: './path/to/image/source.png',
            description: '霊峰白山の恵み大地のミネラルを大量に含んだ伏流水は、醗酵食文化を生み出しました。江戸時代より伝わる美川ふぐの子糠漬は、猛毒のふぐの卵巣を使った奇跡の発酵食品として文化庁「100年フード」に認定されています。',
            location: {
                center: [36.193996544803326, 136.76281951564096],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '塩梅',
            image: './path/to/image/source.png',
            description: '金沢では、お正月に梅の形をした紅白の最中、福梅を食べる風習があります。この福梅のルーツは加賀百万石の殿様、前田家の家紋「梅鉢紋」に由来しています。和菓子の町、金沢で和菓子屋さん巡りはいかがでしょう。',
            location: {
                center: [36.2325686490568, 136.67445796971046],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'ころ柿',
            image: './path/to/image/source.png',
            description: '能登を代表する特産品、志賀町のころ柿は品種「最勝」を原料柿として、古くから伝わる伝統技法を用いて製造された糖度の高い干柿です。 志賀町の農家の軒先では干し柿がオレンジのカーテンのように吊るされています。',
            location: {
                center: [37.01455191255273, 136.78809557407484],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'イカキング',
            image: './path/to/image/source.png',
            description: '日本有数のイカ釣り漁港がある能登町。漁港のそばの巨大モニュメント、イカキングは一躍話題となりました。日本百景に選ばれた九十九湾など風光明媚な里山里海を駆け巡り、能登町に巨大イカキングを描きます。',
            location: {
                center: [37.31698975879169, 137.19920435163115],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '猿',
            image: './path/to/image/source.png',
            description: '奥能登には猿にまつわる伝説・伝承が多数残っています。そして珠洲の海岸線は猿の顔そのもの。激坂の山越え、趣の異なる外浦と内浦の海岸線、風情ある珠洲の街並みとバリエーションに富んだコースになっています。',
            location: {
                center: [37.435750516331964, 137.26568875392508],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'うさぎ',
            image: './path/to/image/source.png',
            description: '七尾湾の中に浮かんでいる能登島の海岸線は、美しい海とおだやかな入江、荒波に削られた岩々など変化にとんだ景色が広がっています。海岸線の道路をつないでいくと大きなうさぎが浮かびあがること、ご存じでしたか？',
            location: {
                center: [37.137386667237244, 137.0238880988466],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'でか山',
            image: './path/to/image/source.png',
            description: '日本一のでか山を誇る青柏祭の起源は平安時代。疫病退散を祈願する天王信仰を背景に伝承されています。青柏祭の大地主神社や小丸山城址公園、一本杉通り、山の寺寺院群、国分寺跡を巡り七尾城にでか山を引き上げます。',
            location: {
                center: [37.03227260636564, 136.98921494973038],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '駅伝',
            image: './path/to/image/source.png',
            description: '河北潟一周駅伝は箱根駅伝と同じ大正9年（1920年）から始まった日本最古の駅伝であり、開催回数は100回を超える伝統的な大会。襷をつないでゴールテープを切るランナーをゴール地点の津幡町で描きます。',
            location: {
                center: [36.65072901132394, 136.66694489243227],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '凧',
            image: './path/to/image/source.png',
            description: '毎年5月に内灘海水浴場で行われる内灘 世界の凧の祭典は、県内外そして海外からたくさんの人が集まる凧の祭典です。アート上にある凧会館では凧づくり体験を行うことができ、内灘海岸では凧あげも楽しめます',
            location: {
                center: [36.66089609303534, 136.63609665161098],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '日本酒',
            image: './path/to/image/source.png',
            description: '白山市は霊峰白山から流れる手取川の伏流水と加賀平野の良質な酒米を用いた日本酒の一大生産地として古より知られております。見渡すかぎり田んぼののどかな扇状地。「手取川」吉田酒造、「天狗舞」車多酒造を巡ります。',
            location: {
                center: [36.2811572990012, 136.66201177739944],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '牛王印',
            image: './path/to/image/source.png',
            description: '平安時代に開かれた加賀禅定道は巨大な扇状地の頂点にある白山比咩神社を起点に、白山へと至る歴史ある信仰の道。白山に登る修験者の安全を祈願するお守りとして使われていた牛王印を手取川扇状地全体に描きます。',
            location: {
                center: [36.4360179011246, 136.64019089731238],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '水の旅',
            image: './path/to/image/source.png',
            description: '白山手取川ジオパークは2023年、ユネスコ世界ジオパークに認定されました。白山に降った雪が水となり、手取川から日本海に流れる水の旅がテーマです。山頂から加賀禅定道～手取川～日本海までの水の旅を描きます。',
            location: {
                center: [36.516248417395964, 136.5732517967133],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]

        },
{

    id: 'slug-style-id',
    alignment: 'left',
    hidden: false,
    title: '白山',
    image: './path/to/image/source.png',
    description: '霊峰白山を源とする手取川の右岸にある川北町。川北町は白山と手取川からたくさんの恩恵を受ける一方、手取川の水害との戦いの歴史でもありました。人々の暮らしや文化に大きな影響を与えてきた白山を描きます。',
    location: {
        center: [36.465096594342, 136.57672612076385],
        zoom: 8.5,
        pitch: 60,
        bearing: 0
      　},


  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: '',
  onChapterEnter: [
      // {
      //     layer: 'layer-name',
      //     opacity: 1,
      //     duration: 5000
      // }
  ],
  onChapterExit: [
      // {
      //     layer: 'layer-name',
      //     opacity: 0
      // }
  ]
},
{

            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '深田久弥'',
            image: './path/to/image/source.png',
            description: '日本人はたいていふるさとの山を持っている。「日本百名山」著者、深田久弥は加賀市大聖寺出身。深田久弥山の文化館でルーツを探り、久弥が愛した白山を眺めながら生まれ育った大聖寺の城下町をめぐります。',
            location: {
                center: [36.309657491375035, 136.31061046480778],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'わんじま',
            image: './path/to/image/source.png',
            description: '輪島漆芸美術館のゆるキャラ、わんじま。輪島塗のお椀がモチーフです。輪島漆芸美術館をスタートし、輪島塗スポットや輪島の朝市など観光名所を巡りながら出来上がったアートは、手に輪島塗のお箸を持ったわんじまです。',
            location: {
                center: [36.34330746538558, 136.5728321787895],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'かも丸',
            image: './path/to/image/source.png',
            description: '加賀市にはラムサール条約に登録されている日本有数の鴨の越冬池や、江戸時代より伝わる伝統的鴨漁「坂網漁」など鴨にちなんだものが有名です。加賀市大聖寺で加賀市の公式キャラクターかも丸くんを描きます。',
            location: {
                center: [36.304460276872305, 136.31694670448692],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'ゆ',
            image: './path/to/image/source.png',
            description: '山代温泉はあいうえお五十音図発祥の地。平安時代、明覚上人はお経を読むためサンスクリット語を学んでいるうちに、日本語に5つの母音があり、文字列がきれいに並ぶことを発見しました。ひらがなで温泉のゆを描きます。',
            location: {
                center: [36.289849521332755, 136.3641407933435],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'ボラ待ちやぐら',
            image: './path/to/image/source.png',
            description: '終日、やぐらの上から海を見張り、魚群がくると網をたぐるという江戸時代からの伝統的漁法のボラ待ちやぐら。最盛期には40基のボラ待ちやぐらがあったそうです。ボラ待ちやぐら3基を巡ってやぐらのアートを描きます。',
            location: {
                center: [37.20631287487701, 136.96999410011946],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '禅',
            image: './path/to/image/source.png',
            description: 'かつて北前船の寄港地として栄えた輪島市門前にある総持寺祖院。海を通じて禅の文化を全国に広めました。また總持寺峨山禅師は、羽咋市永光寺の住職を兼ねており、両寺を結ぶ13里（52km）を往来していたそうです。',
            location: {
                center: [37.29506154297715, 136.77275517746799],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '侍',
            image: './path/to/image/source.png',
            description: '戦火を免れた金沢は、江戸時代から道筋がほとんど変わっていない城下町。昔ながらの町屋が多数残り、町並みそのものが観光名所。金沢城を中心に武家屋敷跡や金沢五社、金沢三茶屋街、金沢三寺院群などを巡ります。',
            location: {
                center: [36.5582422784993, 136.65214357868723],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '冨樫氏',
            image: './path/to/image/source.png',
            description: '富樫氏は、室町時代に加賀国を支配した守護大名。それ以前も木曽義仲との対戦や、源義経の勧進帳など歴史の舞台に度々登場しています。守護所を置いた富樫館跡や、富樫氏が建てた布市神社、喜多家住宅などを巡ります。',
            location: {
                center: [36.288396677778415, 136.3643124547195],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'おにぎり',
            image: './path/to/image/source.png',
            description: 'おにぎりの里　中能登町。その由来は日本最古のおにぎりが出土したことから。1987年に弥生時代の竪穴住居跡からチマキ状炭化米の塊（おにぎりの化石）が発見されました。以降、おにぎりで町おこしがおこなわれています。',
            location: {
                center: [36.988254546964605, 136.89887273692418],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '埴輪',
            image: './path/to/image/source.png',
            description: '能美古墳群、寺井山→末寺山→和田山（２座）→秋常山→西山を繋ぎ埴輪を描きます。能美ふるさとミュージアムでは遺跡で発掘された壺や宝剣・埴輪などを見学。今年は加賀立国能美誕生1200年。能美市のルーツを探ります。',
            location: {
                center: [36.97278916204969, 136.86845019102162],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '白鷹',
            image: './path/to/image/source.png',
            description: '日本では珍しい海から温泉が湧き出ている和倉温泉。七尾湾で一羽の白鷺が傷を癒していたのを漁師夫婦が見つけ、不思議に思い近づいてみると海中から温泉が湧き出ていた。これが和倉温泉の発祥とされています。',
            location: {
                center: [37.087902397353446, 136.91862541562253],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'UFOキャッチャー',
            image: './path/to/image/source.png',
            description: 'UFOの町羽咋。気多大社の横にある正覚院の「気多古縁起」という古い巻物の中には、神力自在に飛ぶ物体が登場したということが由来だそうです。コスモアイル羽咋にはロケットや宇宙船の実物が展示されています。',
            location: {
                center: [36.909152187557616, 136.81504849053016],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'モーゼ',
            image: './path/to/image/source.png',
            description: '宝達志水町モーゼパークには、旧約聖書「十戒」で海を割ったモーゼの墓があります。ユダヤの民衆をイスラエルの地へ導いた後、不思議な天浮船で宝達山にどり着き、余生をこの地で過ごしたという言い伝えがあります。',
            location: {
                center: [36.81469609463348, 136.77759051349193],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '朝顔',
            image: './path/to/image/source.png',
            description: '江戸時代の俳人・千代女は白山市出身。千代女は朝顔の句を多く詠んでいることから、朝顔は白山市の花になっています。若宮八幡宮・明達寺・千代女の里俳句館・本誓寺・聖興寺など白山市の観光スポットを巡ります。',
            location: {
                center: [36.51363255704492, 136.56643890123524],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '頑張ろうスズ',
            image: './path/to/image/source.png',
            description: '2023年5月、大きな震災にあった珠洲。夏にはトライアスロン珠洲、秋には奥能登国際芸術祭が数年ぶりに開催されます。スポーツとアートの力、そしてみんなの強い気持ちと団結で乗り越えていきましょう。がんばろうスズ',
            location: {
                center: [37.441694664081744, 137.25229962179233],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'ONE TEAM',
            image: './path/to/image/source.png',
            description: '長く続いたコロナ禍や地震、豪雨災害を乗り越え、皆が活力を取り戻すために。いしかわ百万石文化祭・新幹線開業・世界ジオパークなど皆で盛り上げるために。オール石川のチジョウエール、ONE TEAMを描きます。',
            location: {
                center: [36.59954872039918, 136.65612761668092],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
{
}    
