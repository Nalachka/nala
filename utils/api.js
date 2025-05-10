// utils/api.js
const mockTeas = [
    {
        id: 1,
        name: "Зеленый чай Сенча",
        description: "Японский зеленый чай, имеет свежий травянистый аромат и легкий сладковатый вкус. Идеально подходит для утреннего чаепития.",
        price: 18,
        image: "https://moschaitorg.ru/upload/resize_cache/iblock/cd6/8s73sgtxqy6xi8bdktudvd5ijdfigr25/689_689_14386c7d0a80fb8aee4bdea45538d5f0b/zelenyy_chay_sencha.png",
        type: 'Зеленый чай'
    },
    {
        id: 2,
        name: "Черный чай Ассам",
        description: "Индийский черный чай, обладает насыщенным солодовым вкусом и крепким ароматом. Отлично подходит для завтрака.",
        price: 22,
        image: "https://moschaitorg.ru/upload/resize_cache/iblock/773/4lpfufehlp0pzhul7rthar2bx3tbrn6w/700_700_14386c7d0a80fb8aee4bdea45538d5f0b/C007.png",
         type: 'Черный чай'
    },
    {
        id: 3,
        name: "Белый Бай Хао Инь Чжень",
        description: "Китайский белый чай, имеет нежный цветочный аромат и мягкий сладковатый вкус. Прекрасен для расслабляющего чаепития.",
        price: 28,
        image: "https://moschaitorg.ru/upload/resize_cache/iblock/0c0/1000_1000_24386c7d0a80fb8aee4bdea45538d5f0b/0c0014ce126053b3c56813ee07e3c709.jpg",
        type: 'Белый чай'
    },
    {
        id: 4,
        name: "Улун Те Гуань Инь",
        description: "Китайский улун, имеет сложный фруктовый аромат и освежающий вкус. Подходит для послеобеденного чаепития.",
        price: 25,
        image: "https://moschaitorg.ru/upload/resize_cache/iblock/29c/6jod4ppjhd9z2a4u07cd9abdfzsy1o5v/1000_1000_14386c7d0a80fb8aee4bdea45538d5f0b/ulun_te_guan_in_s_zhasminom_i_godzhi.jpg",
         type: 'Улун'
    },
    {
        id: 5,
        name: "Матча церемониальная",
        description: "Японский порошковый зеленый чай, обладает насыщенным травянистым вкусом и ярким зеленым цветом. Используется для чайной церемонии.",
        price: 35,
        image: "https://moschaitorg.ru/upload/resize_cache/iblock/7ab/ygm4rwl08jmf6zhut31fepi98kifkftj/700_700_14386c7d0a80fb8aee4bdea45538d5f0b/zelenaya_matcha_premium_yaponiya.jpg",
         type: 'Матча'
    },
    {
        id: 6,
        name: "Эрл Грей",
        description: "Ароматный черный чай с добавлением масла бергамота. Насыщенный вкус и отличный аромат.",
        price: 20,
        image: "https://moschaitorg.ru/upload/resize_cache/iblock/006/x1nxyjwlep82fu4y1d45zgi48v4gdwqs/700_700_14386c7d0a80fb8aee4bdea45538d5f0b/chernyy_chay_erl_grey_klassik.jpg",
        type: 'Черный чай'
    },
    {
        id: 7,
        name: "Ройбуш",
        description: "Натуральный травяной напиток из Южной Африки. Не содержит кофеина.",
        price: 15,
         image: "https://moschaitorg.ru/upload/resize_cache/iblock/e27/843rlxnanum0uivpuv08q5m8mu8ytpav/800_800_14386c7d0a80fb8aee4bdea45538d5f0b/1_2-kopiya.jpg",
         type: 'Травяной чай'
        },
         {
            id: 8,
             name: "Жасминовый чай",
             description: "Зеленый чай, ароматизированный цветками жасмина. Приятный цветочный аромат.",
             price: 23,
            image: "https://moschaitorg.ru/upload/resize_cache/iblock/75a/jf8g1m0vlg89n7dt4divsgmfawk12ess/1000_1000_24386c7d0a80fb8aee4bdea45538d5f0b/1-kopiya.jpg",
            type: 'Зеленый чай'
         },
         {
           id: 9,
           name: "Пуэр",
            description: "Китайский постферментированный чай. Обладает землистым вкусом и имеет своеобразный аромат.",
            price: 30,
             image: "https://moschaitorg.ru/upload/resize_cache/iblock/8d7/yebw5zqdgqjti2jfm4gatag9bpioxvhh/700_700_14386c7d0a80fb8aee4bdea45538d5f0b/shen_puer_rassypnoy_2016.jpg",
            type: 'Черный чай'
         },
          {
            id: 10,
            name: "Гречишный чай Ку Цяо",
             description: "Напиток из обжаренных семян татарской гречихи. Имеет ореховый вкус и аромат.",
             price: 24,
            image: "https://moschaitorg.ru/upload/resize_cache/iblock/b5d/jn9oxhsrcvqduj0kix2fm2lqdam5ewdb/800_800_14386c7d0a80fb8aee4bdea45538d5f0b/1-kopiya.jpg",
             type: 'Травяной чай'
         }
    ];
    export async function fetchTeas(params = {}) {
      return new Promise((resolve) => {
         setTimeout(() => {
            let filteredTeas = [...mockTeas]
            if (params.featured) {
                filteredTeas = filteredTeas.filter((tea, index) => index < 3)
            }
          resolve(filteredTeas)
         }, 200)
      });
    }
    export async function fetchTea(slug) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const tea = mockTeas.find(tea => tea.id == slug)
                if(tea){
                  resolve(tea)
               }else {
                    reject("Tea not found")
                }
            }, 200)
        });
    }
