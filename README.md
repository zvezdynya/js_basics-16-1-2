### Вопросы 💎

1. Что представляют собой формы?
- Набор из элементов управления, размещаемых на Web-странице;
- Аналогичны диалоговым окнам Windows;
- Обычные web-страницы.

Ответ: - Аналогичны диалоговым окнам Windows.

2. Для чего служат формы?

Ответ: Формы служат для получения необходимой от пользователя информации.

3. Каким типом задаётся поле ввода в форме текста?

Ответ: type=”text”.

4. Какими способами можно обратиться к элементу формы?

Ответ: К элементам форм, как и к самим формам, можно обращаться через индексы или через значения атрибута name. Например, у нас есть форма с именем person_data, внутри которой есть поле с именем fio. Самый простой способ обратиться к полю внутри формы: document.forms.person.data.elements.fio. Если мы точно знаем индекс формы и элемента, то можно обратиться так: document.forms[индекс формы].elements[индекс элемента]. Но лучше пользоваться атрибутом “имя”.

5. Какой  JS-код можно указать в атрибуте `action`?

Ответ: В атрибуте action мы указываем адрес сервера, куда хотим отправить данные, полученные из формы.

6. Какой тип имеет свойство elements объекта Form?

Ответ: текстовые данные внутри коллекции.

7. Как сделать валидацию номера кредитной карты? 

Ответ: С помощью регулярного выражения /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/ можно отбросить точно не подходящие комбинации и не нагружать сервер лишними запросами.

8. Восстановить значения умолчания в полях формы можно только по кнопке reset?

Ответ: Можно использовать метод .reset() внутри обработчика. Либо вручную писать сброс полей. И метод .submit() по умолчанию перезагружает страницу, так что поля восстанавливаются до состояния по умолчанию.

9. Каким способом можно отправить данные из формы на сервер?

Ответ: данные из формы можно отправить двумя способами: GET(когда на сервере уже есть данные и нам нужно получить их на клиент, чтобы войти в личный кабинет или почту, к примеру) и POST(когда мы впервые отправляем какие-то данные на сервер для дальнейшего хранения и последующего доступа).

10. Как можно полностью перехватить и обработать javascript-функцией событие submit (отправку данных на сервер)?

Ответ: в лекции говорится о том, что если отменить стандартное поведение обработчика методом .preventDefault(), то можно перехватит submit. но на практике у меня получилось это только с помощью назначения доп обработчика  на ‘click’.

11. Какие есть недостатки у стандартного способа задания валидации через HTML5?

Ответ: -можно проверять только заполненность полей, но не корректность и соответствие данных;

-если говорить о псевдоклассах, то они применяются в момент загрузки страницы, что может вызывать у пользователя негатив от использования такой страницы, а стилизация “обязательных” и “необязательных” полей в целом не очень полезна, т.к. эту информацию обычно указывают в лейблах или плейсхолдерах;

## Задание на развитие мягких навыков (soft skills)🔮

Месяц назад мы ставили перед собой цели (если забыли, то это было [тут](https://www.notion.so/88692713b2924009bf8b5e2b82a5c175)). Пора провести аудит наших целей. Дайте ответы на вопросы:

- актуальны ли мои цели? Не слишком ли они сложные или лёгкие?

Цели по учёбе в процессе достижения, но, к сожалению, и в этой цели, и во всех остальных, в последние три недели почти нет движения, т.к. очень сильно заболели всей семьей и только кто-то идет на поправку, как жестко выпадает кто-то другой, а семья у нас большая.

Цели несложные, но без нормального самочувствия они все сыпятся, к сожалению.

- что я сделала для их достижения?
    
    Я делаю много, стараюсь каждую временнУю и силовую возможность тратить на достижение целей. Я - молодец. Я училась, занималась с дочкой, сдали аттестации, но еще есть к чему стремиться, начала собирать справки и документы для госпитализации сына. Т.к. на горизонте маячит переезд, решила чуть облегчить себе задачу и пока не собирать документы для сада сыновьям, но сейчас, из-за болезни, это и невозможно.
    
- что у меня получалось хорошо? Что я могу сделать ещё лучше?

Хорошо у меня получалось болеть) всё остальное - в меру сил. Ну ничего, жизнь не заканчивается, всё ещё будет, просто не так скоро, как хотелось бы.

- каких ресурсов мне не хватало?

Здоровья, отдыха, времени.

Может быть, у вас возникнут свои вопросы, ответьте на них, и если почувствуете необходимость, скорректируйте ваши цели или перепишите их. Наличие целей и работа над ними — важная часть нашей жизни. Путь к ним не всегда гладкий или легкий, но наличие целей, больших или малых, — это часть того, что делает нашу жизнь увлекательной, даёт ощущение смысла, указывает направление, в котором мы хотим двигаться, и заставляет нас интересоваться и вовлекаться в происходящее, что положительно сказывается на общем ощущении счастья и довольства жизнью. И если вам нужна помощь, команда школы всегда рядом!

Пока мои цели неизменны, потому что я по назначенным в прошлом месяце просела. Как будет возможность скорректировать их - обязательно это сделаю. Но пока на берегу целей всё стабильно.