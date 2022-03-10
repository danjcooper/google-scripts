function updateAllDates() {
  const app = SlidesApp.getActivePresentation();
  const slides = app.getSlides();

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date();

  const dayIndex = date.getDay();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const suffix = calculateDateSuffix(day);

  const newDate = `${days[dayIndex]} ${day}${suffix} ${months[monthIndex]} ${year}`;

  slides.forEach((slide) => {
    const shapes = slide.getShapes();
    shapes.forEach((shape) => {
      const textFrames = shape.getText();
      const matches = textFrames.find('\\w+\\s\\d+\\w+\\s\\w+\\s\\d+');
      matches.forEach((match) => {
        match.setText(newDate);
      });
    });
  });
}

const calculateDateSuffix = (dateDay) => {
  let suffix;

  if (dateDay === 1 || dateDay === 21 || dateDay === 31) {
    suffix = 'st';
  } else if (dateDay === 2 || dateDay === 22) {
    suffix = 'nd';
  } else if (dateDay === 3 || dateDay === 23) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  return suffix;
};
