export default {
    userData: {
        main: {
            "name": "Алексей Бондаренко",
            "description": "Обучаюсь языку программирования JavaScript и React",
            "image": "person.jpg",
            "bio": "Обучаюсь программированию на различных курсах и тренажёрах, хочу стать мастером своего дела.",
            "contactmessage": "Если моё резюме вас заинтересовало, можете связаться со мной по указанным контактам.",
            "email": "striker13031993@gmail.com",
            "phone": "+7 (914) 399 3502",
            "address": {
                "city": "г. Свободный",
                "state": "Амурская область",
            },
            social: [
                {
                    "name": "github",
                    "url": "http://github.com/Alex13031993",
                    "className": "fa fa-github"
                }
            ],
            occupation: "fwef"
        },
        resume: {
            skillmessage: "",
            education: [
                {
                    "school": "DVGUPS",
                    "degree": "Industrial and civil construction",
                    "graduated": "2015",
                    "description": "Инженер - строитель (Незаконченное высшее образование)"
                },
                {
                    "school": "IT - KAMASUTRA",
                    "graduated": "Present Days",
                    "degree": "React/Redux",
                },
            ],
            work: [
                {
                    "company": "AMC Leonardo",
                    "title": "Mechanic",
                    "years": "August 2020 - Present",
                },
            ],
            skills: [
                {
                    "name": "Git",
                    "level": "40%"
                },
                {
                    "name": "ReactJs",
                    "level": "50%"
                },
                {
                    "name": "CSS",
                    "level": "60%"
                },
                {
                    "name": "HTML5",
                    "level": "80%"
                },
            ]
        },
        testimonials: [
            {
                "text": "Здесь должды быть рекомендации от работодателей, но пока их тут нет, однако я уверен, что скоро они появятся.",
                "user": "Какой-то работодатель..."
            }
        ]
    },
    fetching: false,
    error: null,
};