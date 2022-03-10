function updateAllDates() {
  const app = SlidesApp.getActivePresentation();
  const slides = app.getSlides();

  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const newDate = `${day}/${month}/${year}`;

  slides.forEach((slide) => {
    const shapes = slide.getShapes();
    shapes.forEach((shape) => {
      const textFrames = shape.getText();
      const matches = textFrames.find('\\d+/\\d+/\\d+');
      matches.forEach((match) => {
        match.setText(newDate);
      });
    });
  });
}
