const participants = [
  "Забродский  Андрей (Магадан)",
  "Шуреева Ольга (Новокузнецк)",
  "Иксанов Ильдар (Новокуйбышевск)",
  "Епифанова Ольга (Санкт-Петербург)",
  "Мамедова Фидан (Москва)",
  "Ясеновец Наталия (Санкт-Петербург)",
  "Матвеенко Мария (Шахтерск)",
  "Ляпин Алексей (Москва)",
  "Топчиева Елена (Новокузнецк)",
  "Веретенников Александр (Туапсе)",
  "Бенсон Марина (Москва)",
  "Сидоров Дмитрий (Усть-Луга)",
  "Симутина Елена (Чукотка)",
  "Чумаров Юрий (Туапсе)",
  "Копытов Константин (Санкт-Петербург)",
  "Калякин Олег (Салават)",
  "Коровина Ирина (Ейск)",
  "Ларионов Дмитрий (Москва)",
  "Грабовик  Александр (Самара)",
  "Старовойтова Мария (Санкт-Петербург)",
  "Фролов Дмитрий (Санкт-Петербург)",
  "Курочкина Анастасия (Москва)",
  "Медакова Валерия (Санкт-Петербург)",
  "Усольцева Анастасия (Санкт-Петербург)",
  "Атаманова Олеся (Москва)",
  "Фисенко Дарья (Новороссийск)",
  "Абукова Дарья (Мурманск)",
  "Сухорученко Дарья (Санкт-Петербург)",
  "Шокина Марина (Санкт-Петербург)",
  "Вихлянцева Татьяна (Санкт-Петербург)",
  "Похлебина Анастасия (Ростов-на-Дону)",
  "Белозеров Ярослав (Санкт-Петербург)",
  "Бакалова Нелли (Москва)",
  "Горюшкина Ирина (Москва)",
  "Захарова Евгения (Санкт-Петербург)",
  "Сыроватская Евгения (Ростов-на-Дону)",
  "Кутергина Любовь (Ростов-на-Дону)",
  "Касумов Эльдар (Махачкала)",
  "Андриевская Анна (Туапсе)",
  "Козлов Алексей (Санкт-Петербург)",
  "Саруль Кристина (Новороссийск)",
  "Смотрителева Анна (Самара)",
  "Коряковский  Игорь (Санкт-Петербург)",
  "Индерейкина Кристина (Москва)",
  "Маноцкова Маргарита (Москва)",
  "Петрова  Татьяна (Санкт-Петербург)",
  "Наумова Виктория (Чита)",
  "Кызласов Евгений (Екатеринбург)",
  "Копотева Ольга (Красноярск)",
  "Смирнова Ольга (Санкт-Петербург)",
  "Амелютина Анастасия (Ванино)",
  "Потёмка Юрий (Туапсе)",
  "Филатова Елена (Самара)",
  "Мельник Юлия (Санкт-Петербург)",
  "Попова Надежда (Чегдомын)",
  "Лотков Алексей (Улан-Удэ)",
  "Попова Анастасия (Санкт-Петербург)",
  "Викол Дмитрий (Мурманск)",
  "Шушарин Денис (Усть-Луга)",
  "Тетерук Дмитрий (Темрюк)",
  "Никулин Юрий (Ростов-на-Дону)",
  "Черкашина Елена (Темрюк)",
  "Почекутова  Галина (Анжеро-Судженск)",
  "Сивак Наталия (Туапсе)",
  "Данильченко Владислав (Санкт-Петербург)",
  "Васина Елена (Темрюк)",
  "Шварёв  Евгений (Находка)",
  "Алиев Ариф (Ухта)",
  "Подольская Елена (Чегдомын)",
  "Соловьёва Юлия (Находка)",
  "Гадышев Виктор (Новая Чара)",
  "Кустенко Максим (Новая Чара)",
  "Чуприна Ольга (Находка)",
  "Кравченко Анастасия (Находка)",
  "Гадышев Виктор (Новая Чара)",
  "Тютерева Оксана (Чита)",
  "Мехедов Дмитрий (Находка)",
  "Оленева Жанна (Нерюнгри)",
  "Забелина Наталия (Чита)",
  "Цындымеева Аюна (Чита)",
  "Гилёва  Татьяна (Новокузнецк)",
  "Клочкова Наталья (Находка)",
  "Резанов Александр (Чита)",
  "Кочергин Владимир (Санкт-Петербург)",
  "Боброва Дарья (Кемерово)",
  "Петраченкова Анна (Иркутск)",
  "Новикова Елена (Ростов-на-Дону)",
  "Дунаева Екатерина (Новокузнецк)",
  "Афанасьев Юрий (Красноярск)",
  "Кузнецова Татьяна (Москва)",
  "Колеватова Алена (Кемерово)",
  "Кузьмина Елена (Анжеро-Судженск)",
  "Балтина Наталья (Новокузнецк)",
  "Попов Максим (Находка)",
  "Дернова Елизавета (Новокузнецк)",
  "Антошина Анна (Новокузнецк)",
  "Пальчикова Екатерина (Новокузнецк)",
  "Чернышев Алесандр (Иркутск)",
  "Фоминцева Наталья (Новокузнецк)",
  "Платонова Галина (Новокузнецк)",
  "Умеренко Яна (Новокузнецк)",
  "Хозйкин  Роман (Черногорск)",
  "Егорова Марина (Усть-Луга)",
  "Игнатьева Екатерина (Новокузнецк)",
  "Козлова Ксения (Новокузнецк)",
  "Тропина Татьяна (Кемерово)",
  "Романова Ольга (Новокузнецк)",
  "Мутина Анастасия (Иркутск)",
  "Гнездилова Наталья (Новокузнецк)",
  "Лесникова Юлия (Новокузнецк)",
  "Волобуева  Анна (Новокузнецк)",
  "Ерахтин Иван (Ростов-на-Дону)",
  "Ермолина Наталья (Ростов-на-Дону)",
  "Евтушенко  Евгений (Новокузнецк)",
  "Чижова Надежда (Новокузнецк)",
  "Голофаст  Павел (Новокузнецк)",
  "Тимошенко Алена (Чита)",
  "Климов Владимир (Новороссийск)",
  "Капустина Юлия (Новороссийск)",
  "Пяткина Анастасия (Волгоград)",
  "Велькова Дария (Новороссийск)",
  "Окладникова Алина (Кемерово)",
  "Горячих  Екатерина (Москва)",
  "Богомолов Иван (Астрахань)",
  "Спицына Полина (Новокузнецк)",
  "Монакова Яна (Новокузнецк)",
  "Гикал Сергей (Находка)",
  "Григорьева  Екатерина (Самара)",
  "Семенова Наталья (Бузулук)",
  "Мамедов Бахтияр (Новороссийск)",
  "Шевченко Евгений (Азов)",
  "Ефремов Никита (Новокузнецк)",
  "Клеер Елена (Ростов-на-Дону)",
  "Грузинская Диана (Новороссийск)",
  "Селеткова Елена (Туапсе)",
  "Родина Елена (Махачкала)",
  "Ямов Дмитрий (Красноярск)",
  "Андреева Татьяна (Кемерово)",
  "Смирнова Ольга (Новокузнецк)",
  "Малахов Сергей (Нижнекамск)",
  "Шмелев Антон (Черногорск)",
  "Симейский Николай (Кемерово)",
  "Новожилов Владимир (Новокузнецк)",
  "Шульга Игорь (Новороссийск)",
  "Зарембо  Андрей (Сургут)",
  "Сбитякова Наталья (Туапсе)",
  "Силин Антон (Москва)",
  "Магомедов Гасан (Таганрог)",
  "Наумова Виктория (Чита)",
  "Яворова Алина (Туапсе)",
  "Николаев Александр (Новокузнецк)",
  "Нестерович Ульяна (Санкт-Петербург)",
  "Мартынов  Игорь (Ростов-на-Дону)",
  "Пальчикова Екатерина (Новокузнецк)",
  "Петрова  Мария (Чита)",
  "Чеглаков Дмитрий (Новый Уренгой)",
  "Худышкина Наталья (Екатеринбург)",
  "Шамильева  Эльвира (Астрахань)",
  "Первушина Марина (Москва)",
  "Уляшева Юлия (Санкт-Петербург)",
  "Козлова Валерия (Челябинск)",
  "Третяк Оксана (Новороссийск)",
  "Могильникова Светлана (Новороссийск)",
  "Лесникова Юлия (Новокузнецк)",
  "Короленко Оксана (Санкт-Петербург)",
  "Грисько Мария (Самара)",
  "Меладзе Ирина (Москва)",
  "Евтушенко Инна (Санкт-Петербург)",
  "Губайдулина Светлана (Улан-Удэ)",
  "Погиблев Дмитрий (Владивосток)",
  "Цимерман Наталья (Екатеринбург)",
  "Сафонова Елена (Санкт-Петербург)",
  "Калякин Олег (Салават)",
  "Кисельникова Анна (Волгоград)",
  "Китаева Нина (Иркутск)",
  "Худякова Светлана (Находка)",
  "Святченко Анастасия (Санкт-Петербург)",
  "Смирнова Надежда (Туапсе)",
  "Ермоленко Ольга (Находка)",
  "Андриевская Анна (Туапсе)",
  "Лукин Артём (Санкт-Петербург)",
  "Хмельнова Оксана (Усть-Луга)",
  "Копытов  Константин (Санкт-Петербург)",
  "Звездочетова Мария (Санкт-Петербург)",
  "Долбая Элина (Москва)",
  "Ульдина Марина (Москва)",
  "Радкевич Максим (Новороссийск)",
  "Касумов  Эльдар (Махачкала)",
  "Селезов Владислав (Чита)",
  "Алексеев Дмитрий (Новокузнецк)",
  "Хрипаченко  Екатерина (Темрюк)",
  "Чубукин Александр (Чегдомын)",
  "Риксен Стелла (Нерюнгри)",
  "Бондаревский Максим (Новороссийск)",
  "Панарина Наталья (Москва)",
  "Гостева Анастасия (Москва)",
  "Шевченко Андрей (Азов)",
  "Целищева Лариса (Санкт-Петербург)",
  "Данилова Виталия (Санкт-Петербург)",
  "Шаблаков Сергей (Астрахань)",
  "Меньшенина Ксения (Бузулук)",
  "Васильев Виктор (Ванино)",
  "Поготов Владимир (Находка)",
  "Пелагеичева Екатерина (Москва)",
  "Меркушев Алексей (Находка)",
  "Дернова Елизавета (Новокузнецк)",
  "Видерник Ольга (Новокузнецк)",
  "Горбунова Кристина (Новокузнецк)",
  "Береснева Кристина (Новокузнецк)",
  "Ульянов Евгений (Сызрань)",
  "Новикова Елена (Ростов-на-Дону)",
  "Тимошенко Алена (Чита)",
  "Воробьева Виктория (Новокузнецк)",
  "Ефремов Никита (Новокузнецк)",
  "Лусников  Константин (Черногорск)",
  "Кузьминых  Алексей (Екатеринбург)",
  "Шарапова Алёна (Туапсе)",
  "Космин Константин (Новороссийск)",
  "Топчиева Елена (Новокузнецк)",
  "Княжев Владислав (Новокузнецк)",
  "Гололобова Елизавета (Санкт-Петербург)",
  "Сорочан Максим (Чита)",
  "Шабанова  Ирина (Ейск)",
  "Ткаченко  Маргарита (Нерюнгри)",
  "Каразинова Наталья (Ростов-на-Дону)",
  "Родченко  Наталия (Новокузнецк)",
  "Калинина Ольга (Ейск)",
  "Шевченко Александр (Ейск)",
  "Шмайкова  Ирина (Черногорск)",
  "Сосновская  Елена (Черногорск)",
  "Белорусцев Макар (Новокузнецк)",
  "Тетюрева Екатерина (Екатеринбург)",
  "Нестерова  Гузель (Санкт-Петербург)",
];

// const participants = [
//   "Анна Акинина",
//   "Анастасия Усольцева",
//   "Игорь Коряковский",
//   "Наталья Белых",
//   "Анжелика Поспелова",
//   "Андрей Куценко",
//   "Юлия Ващенко",
//   "Елена Машковцева",
//   "Инна Казинская",
//   "Екатерина Никуляк",
//   "Юлия Воронина",
//   "Кристина Саруль",
//   "Татьяна Бабенко",
//   "Анна Восколович",
//   "Роман Большаков",
//   "Алексей Ляпин",
//   "Валентина Жердева",
//   "Мелтэм Гасанова",
//   "Максим Салманов",
//   "Мария Палтусова",
//   "Иван Ополонин",
//   "Алексей Филимонов",
//   "Анна Кисельникова",
//   "Марина Шевчук",
//   "Дарья Лисовенко",
//   "Елена Шарапова",
//   "Надежда Карапетян",
//   "Елена Сафонова",
//   "Мария Матвеенко",
//   "Алена Журба",
//   "Василий Гридин",
//   "Вячеслав Приходько",
//   "Наталья Голубь",
//   "Николай Федосов",
//   "Надежда Смирнова",
//   "Марина Шокина",
//   "Елена Симутина",
//   "Мария Дорофеева",
//   "Владислав Николайчук",
//   "Андрей Шевченко",
//   "Анастасия Амелютина",
//   "Фидан Мамедова",
//   "Дмитрий Чеглаков",
//   "Екатерина Железняк",
//   "Денис Архипов",
//   "Владимир Кропачев",
//   "Валентин Павлов",
//   "Ольга Верхоглядова",
//   "Ольга Кушпиль",
//   "Артур Гайнутдинов",
//   "Зураб Тавдумадзе",
//   "Светлана Чуприна",
//   "Денис Скорев",
//   "Николай Петров",
//   "Павел Казанов",
//   "Максим Кустенко",
//   "Тамара Клименко",
//   "Валерия Моргун",
//   "Ольга Королева",
//   "Сергей Колмаков",
//   "Виктор Курепов",
//   "Надежда Попова",
//   "Ольга Нахтыгаль",
//   "Евгения Герасимова",
//   "Сергей Малахов",
//   "Анастасия Балабушкина",
//   "Татьяна Утюжникова",
//   "Виктория Атеняева",
//   "Владислав Борщев",
//   "Юлия Соловьёва",
//   "Анна Червякова",
//   "Владимир Люта",
//   "Наталья Клочкова",
//   "Алексей Меркушев",
//   "Елена Краснощёкова",
//   "Анна Петраченкова",
//   "Ольга Мартьянова",
//   "Наталья Батова",
//   "Алёна Тимошенко",
//   "Елена Санина",
//   "Александр Щеглов",
//   "Владимир Мастерских",
//   "Дмитрий Логашов",
//   "Кристина Береснева",
//   "Анна Смотрителева",
//   "Кристина Шкуропадская",
//   "Ольга Шишкина",
//   "Виктория Христонько",
//   "Александр Прудников",
//   "Владислав Овчеренко",
//   "Евгения Сыроватская",
//   "Екатерина Дорофеева",
//   "Юлия Мельник",
//   "Елена Черкашина",
//   "Мария Фаляшина",
//   "Виктор Сурков",
//   "Евгений Зиновьев",
//   "Наталья Щукина",
//   "Инна Евтушенко",
//   "Юлия Попова",
//   "Георгий Алеров",
//   "Мария Петрова",
//   "Александр Резанов",
//   "Виктория Наумова",
//   "Александра Степанова",
//   "Тимур Хекимов",
//   "Алена Колеватова",
//   "Любовь Маркова",
//   "Ирина Коровина",
//   "Юлия Таксиди",
//   "Анастасия Святченко",
//   "Сергей Гостев",
//   "Дмитрий Чикунов",
//   "Сергей Стариков",
//   "Дарья Абукова",
//   "Александр Карпенко",
//   "Наталия Родченко",
//   " Свинаков",
//   "Наталья Кудряшова",
//   "Артём Кипа",
//   "Ксения Меньшенина",
//   "Елена Потапова",
//   "Алена Михуца",
//   "Наталья Кузьмина",
//   "Даниил Яковлев",
//   "Антон Шмелев",
//   "Ольга Чуприна",
//   "Анна Скрипкина",
//   "Дарья Першина",
//   "Дарья Боброва",
//   "Алина Окладникова",
//   "Татьяна Тропина",
//   "Екатерина Акинина",
//   "Алексей Токарев",
//   "Александр Грабовик",
//   "Оксана Михайлова",
//   "Дмитрий Писаревский",
//   "Елизавета Чернышова",
//   "Анастасия Вдовина",
//   "Дмитрий Кирилюк",
//   "Наталья Мориц",
//   "Никита Ефремов",
//   "Елена Шаклон",
//   "Виктор Гадышев",
//   "Татьяна Бусыгина",
//   "Евгения Васюченко",
//   "Дарья Тиунова",
//   "Николай Старцев",
//   "Наталья Сбитякова",
//   "Николай Симейский",
//   "Марина Ульдина",
//   "Татьяна Орлова",
//   "Людмила Прививкова",
//   "Юрий Афанасьев",
//   "Владимир Кочергин",
//   "Михаил Уланов",
//   "Лилия Спасеная",
//   "Елена Афанасьева",
//   "Аракси Арутюнян",
//   "Александр Миломаев",
//   "Александр Рехтин",
//   "Владислав Селезов",
// ];

let prevWinner = [19, 26, 103, 117, 154, 88, 47];

function getWinner() {
	console.log("prevWinner", prevWinner);
  if (participants.length === prevWinner.length) {
    alert("Все участники выйграли");
    return "";
  }

  const max = Math.floor(participants.length - 1); // Округляем вниз
  let index = null;
  do {
    index = Math.floor(Math.random() * (max + 1));
  } while (prevWinner.indexOf(index) !== -1);

  const winnerName = participants[index];
  console.log(prevWinner);

  prevWinner.push(index);

  return `${winnerName} <br> ${index + 1}`;
}

// LotteryMachine Class
class LotteryMachine {
  constructor(opt = {}) {
    let _def;
    _def = {
      class: "lottery-machine",
      viewClasses: {
        base: "base",
        lever: "lever",
        tube: "tube",
        rightDoor: "right-door",
        leftDoor: "left-door",
        lift: "lift",
        ball: "ball",
        hoverArea: "hover-area",
      },
      size: 240,
      ball: {
        count: 32,
        size: 100,
        colors: [
          "#c15bb6",
          "#8380c3",
          "#ffde7f",
          "#ff8f03",
          "#ec5767",
          "#ff8085",
        ],
      },
      duration: [210, 225],
    };
    // _ASSERT(opt.ball.count?, "opt.ball.count is required")
    this.opt = $.extend(true, _def, opt);
    this.view = null;
    this.views = {};
    this.dom = { canvas: null };
    this.balls = [];
    this.build();
  }

  build(opt = {}) {
    let base, ref;
    base = this.dom;
    this.opt = $.extend(this.opt, opt);

    if (this.view == null) {
      this.view = $("<div>", { class: `${this.opt.class}` });
    }

    for (let key in this.opt.viewClasses) {
      this.views[key] = $("<div>", {
        class: `lottery-${this.opt.viewClasses[key]}`,
      });
      this.views[key].appendTo(this.view);
    }

    if (base.canvas == null) {
      base.canvas = $("<canvas>", {
        class: `${this.opt.class}-canvas`,
      }).appendTo(this.view);
    }

    // Добавить новые шарики
    this.balls = function () {
      let results = [];
      for (
        let j = 0, ref = this.opt.ball.count;
        0 <= ref ? j < ref : j > ref;
        0 <= ref ? j++ : j--
      ) {
        results.push(j);
      }
      return results;
    }
      .apply(this)
      .map((i) => {
        return this.createBall();
      });
    this._setContext();
    return this;
  }

  // Сформировать новый шарик
  createBall() {
    let _from, _ball;
    _ball = {
      // Начальные параметры анимации
      from: {
        pos: (_from = this.getBallPos(false)),
        time: null,
      },
      // Конечные параметры анимации
      to: {
        pos: this.getRandomPos(),
      },
      pos: _from,
      // Длительность анимации
      duration: this.getRandomDuration(),
      rotate: 0,
    };
    return _ball;
  }

  // Запомнить контекст для молекул
  _setContext() {
    let _ratio, _size;
    _ratio = this._getRatio();
    _size = this.opt.size;
    this.dom.canvas
      .attr({
        width: _size * _ratio,
        height: _size * _ratio,
      })
      .css({
        width: _size,
        height: _size,
      });
    this.ctx = this.dom.canvas[0].getContext("2d");
    this.ctx.scale(_ratio, _ratio);
    this.ctx.save();
    return this;
  }

  // Получить коэффициент масштабирование канваса
  _getRatio() {
    return window.devicePixelRatio === 2 ? 2 : 1;
  }

  // Сгенерировать позицию шарики
  getRandomPos() {
    let _angle, _m_radius, _pos, _radius, _t_radius, x, y;
    _angle = Math.random() * 2 * Math.PI;
    _radius = this.opt.size / 2;
    // Радиус шарики
    _m_radius = this.opt.ball.size / 2;
    // Радиус окружности для расчета координат
    // Увеличен на 1/5 от радиуса шарики для устранения зазоров между молекулой и стенками пробирки
    _t_radius = _radius - _m_radius + 0.5 * _m_radius;
    // Координаты на окружности
    y = Math.sin(_angle) * _t_radius;
    x = Math.cos(_angle) * _t_radius;
    _pos = {
      left: _radius + x,
      top: _radius - y,
    };
    return _pos;
  }

  // Сгенерировать позицию шарики
  getBallPos(random = true) {
    let _angle, _m_radius, _pos, _radius, _t_radius, x, y, randomShift;
    randomShift = 0;
    if (random) {
      _angle = Math.random() * 2 * Math.PI;
    } else {
      _angle = (4 / 3) * Math.PI + (Math.random() * Math.PI) / 3;
      randomShift = Math.random() * 10 - 5;
    }
    _radius = this.opt.size / 2;
    // Радиус шарики
    _m_radius = this.opt.ball.size / 2;
    // Радиус окружности для расчета координат
    // Увеличен на 1/5 от радиуса шарика для устранения зазоров между молекулой и стенками пробирки
    _t_radius = _radius - _m_radius + 0.5 * _m_radius;
    // Координаты на окружности
    y = Math.sin(_angle) * _t_radius + randomShift;
    x = Math.cos(_angle) * _t_radius + randomShift;
    _pos = {
      left: _radius + x,
      top: _radius - y,
    };
    return _pos;
  }

  // Сгенерировать позицию шарики
  getRandomDuration() {
    return Math.round(
      Math.random() * [this.opt.duration[1] - this.opt.duration[0]] +
        this.opt.duration[0]
    );
  }

  // Сгенерировать угол поворота
  getRandomAngle() {
    return Math.round(Math.random() * 4 * Math.PI - 2 * Math.PI);
  }

  // Нарисовать одну молекулу
  _drawBall(ball, index) {
    let _pos, _radius;
    this.ctx.save();
    // Позиция центра шарики
    _pos = {
      left: parseInt(ball.pos.left, 10),
      top: parseInt(ball.pos.top, 10),
    };
    // Радиус шарики
    _radius = this.opt.ball.size / 2;
    // Изменить начало координат
    this.ctx.translate(_pos.left, _pos.top);
    // Начальный угол поворота
    this.ctx.rotate(ball.rotate);
    this.ctx.moveTo(0, 0);
    // Внешние окружности
    this.ctx.beginPath();
    this.ctx.fillStyle = this.opt.ball.colors[Math.floor(Math.random() * 7)];
    this.ctx.arc(0, 0, _radius / 2, 0, 2 * Math.PI);
    this.ctx.fill();
    // Внутренние окружности
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.arc(_radius / 6, -_radius / 6, _radius / 8, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.restore();
    return this;
  }

  // Нарисовать шарики
  drawBalls() {
    if (!this.disabled) {
      this._clearBalls();
      this.balls.map((ball, index) => {
        return this._drawBall(ball, index);
      });
    }
    return this;
  }

  // Произвольная анимация
  animate(opt = {}, step, cb) {
    let _deferred, _t_func, _time_from, def;
    // Значения по умолчанию
    def = {
      from: 0,
      to: 1,
      duration: 500,
      step: 30,
    };
    opt = $.extend(true, def, opt);
    _deferred = $.Deferred();
    if (!this.disabled) {
      _time_from = Date.now();
      // Вспомогательная рекурсивная функция
      _t_func = function () {
        let _k, _val;
        // Прогресс анимации
        _k = (Date.now() - _time_from) / opt.duration;
        if (_k < 1) {
          _val = opt.from + _k * (opt.to - opt.from);
          step(_val);
          return setTimeout(_t_func, opt.step);
          // $.delay(opt.step, _t_func)
        } else {
          step(opt.to);
          _deferred.resolve();
          return typeof cb === "function" ? cb() : void 0;
        }
      };
      _t_func();
    } else {
      _deferred.resolve();
    }
    return _deferred;
  }

  // анимация перемешивания шариков
  _shakeBalls(now) {
    this.views.lever.removeClass("hover").addClass("down");
    this.balls.forEach((ball) => {
      //console.log(now);
      // Если цикл анимации завершился или не начинался
      var _k, i, len, ref, type;

      if (ball.from.time == null || ball.from.time + ball.duration < now) {
        ball.from.time = now;
        ball.from.pos = $.extend({}, ball.pos);
        ball.to.pos = this.getRandomPos();
        ball.to.rotate = this.getRandomAngle();
      } else {
        // Пересчитать координаты
        _k = (now - ball.from.time) / ball.duration;
        ref = ["left", "top"];
        for (i = 0, len = ref.length; i < len; i++) {
          type = ref[i];
          ball.pos[type] =
            ball.from.pos[type] +
            _k * (ball.to.pos[type] - ball.from.pos[type]);
          ball.rotate = _k * ball.to.rotate;
        }
      }
    });
    this.drawBalls();
  }

  // анимация прекращения перемешивания шариков
  _endShakeBalls(now) {
    this.views.lever.removeClass("down");
    this.balls.forEach((ball) => {
      // Если цикл анимации завершился или не начинался
      var _k, i, len, ref, type;

      if (ball.from.time == null || ball.from.time + ball.duration < now) {
        ball.from.time = now;
        ball.from.pos = $.extend({}, ball.pos);
        ball.to.pos = this.getBallPos(false);
        ball.to.rotate = this.getRandomAngle();
      } else {
        // Пересчитать координаты
        _k = (now - ball.from.time) / ball.duration;
        ref = ["left", "top"];
        for (i = 0, len = ref.length; i < len; i++) {
          type = ref[i];
          ball.pos[type] =
            ball.from.pos[type] +
            _k * (ball.to.pos[type] - ball.from.pos[type]);
          ball.rotate = _k * ball.to.rotate;
        }
      }
    });
    this.drawBalls();
  }

  // play: shakeBalls + endShakeBalls
  play() {
    let _now = Date.now();
    return this.animate(
      {
        from: _now,
        to: _now + 2000,
        duration: 2000,
        step: 2,
      },
      (now) => this._shakeBalls(now)
    ).then(() => {
      _now = Date.now();
      this.animate(
        {
          from: _now,
          to: _now + 500,
          duration: 500,
          step: 2,
        },
        (now) => this._endShakeBalls(now)
      );
    });
  }

  // animation of rolling ball out of machine
  rollBallOut(parent, placeForBall, animationOpt, callback) {
    const { ball, lift, rightDoor, leftDoor } = this.views;
    const randomColor =
      this.opt.ball.colors[
        Math.floor(Math.random() * this.opt.ball.colors.length)
      ];
    const randomNumber = [Math.floor(Math.random() * 100)];

    ball
      .removeClass("no-transition")
      .attr("style", "")
      .html("")
      .css({ backgroundColor: randomColor })
      .addClass("blink");

    function liftBallUp() {
      return new Promise((resolve) => {
        ball.addClass("animation-up");
        lift.addClass("animation");
        setTimeout(resolve, 1000);
      });
    }

    function liftBallDown() {
      return new Promise((resolve) => {
        ball.addClass("animation-roll");
        lift.removeClass("animation");
        setTimeout(resolve, 1500);
      });
    }

    function openDoors() {
      return new Promise((resolve) => {
        ball
          .css({ zIndex: 2 })
          //   .html(randomNumber)
          //  .html("Marina<br>12")
          .html(getWinner())
          .addClass("no-transition")
          .removeClass("blink animation-roll animation-up");

        rightDoor.addClass("animation");
        leftDoor.addClass("animation");

        setTimeout(resolve, 1000);
      });
    }

    function moveBallOut() {
      const startCoords = ball.offset();
      const endCoords = placeForBall.offset();

      const animatedBall = ball
        .clone()
        .addClass("clone")
        .css(startCoords)
        .appendTo(parent);

      return new Promise((resolve) => {
        TweenMax.to(animatedBall, 1, {
          ...animationOpt,
          x: -(startCoords.left - endCoords.left),
          y: -(startCoords.top - endCoords.top),
          ease: Power2.easeInOut,
          parseTransform: true,
          onStart: () => {
            ball.css({ opacity: 0 });
            animatedBall.css({ zIndex: 100 });
          },
          onComplete: () => {
            rightDoor.removeClass("animation");
            leftDoor.removeClass("animation");
            resolve();
          },
        });
      });
    }

    liftBallUp()
      .then(() => liftBallDown())
      .then(() => openDoors())
      .then(() => moveBallOut())
      .then(() => setTimeout(callback, 1000));
  }

  // Добавить экзмепляр в DOM-дерево
  draw(parent) {
    this.view.appendTo(parent);
    this.ctx.save();
    this.ctx.translate(0, 0);
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ff0000";
    this.ctx.arc(70, 70, 70, 0, 2 * Math.PI);
    this.ctx.fill();
    this.drawBalls();
    return this;
  }

  // Очисить канвас
  _clearBalls() {
    this.ctx.clearRect(0, 0, this.opt.size, this.opt.size);
    return this;
  }

  clear() {
    this.view.remove();
    this.dom.canvas = null;
    this.balls = [];
    return this;
  }
}

// main variables
const $scene = $(".scene");
const $ballPlace = $("#ball-place");
const $button = $("button#play");
const ballAnimationOpt = {
  width: 240,
  height: 240,
  fontSize: 42,
};

// init LotteryMachine
const lotteryMachine = new LotteryMachine();
lotteryMachine.draw($scene);

const handleClick = () => {
  $button.off("click");
  lotteryMachine
    .play()
    .then(() =>
      lotteryMachine.rollBallOut($scene, $ballPlace, ballAnimationOpt, () =>
        $button.on("click", handleClick)
      )
    );
};

$button.on("click", handleClick);

document.addEventListener("DOMContentLoaded", () => {
  const lotteryMachine = document.querySelector(".lottery-machine");
  const targetDiv = document.querySelector(".background-image");
  let div = document.createElement("div");
  div.classList.add("lottery");

  div.appendChild(lotteryMachine);
  targetDiv.appendChild(div);
  //   caldWindow();
});

function caldWindow() {
  console.log("calc");

  let width = window.innerWidth;
  let height = window.innerHeight;

  const spanWidth = document.querySelector(".userWidth");
  const spanHeight = document.querySelector(".userHeight");

  spanWidth.innerHTML = `w: ${width}`;
  spanHeight.innerHTML = `h: ${height}`;
}

// window.addEventListener("resize", caldWindow);
