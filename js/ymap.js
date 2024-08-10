export function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.723661504206355, 37.56504308465882],
    zoom: 17
  });

  const mark = new ymaps.Placemark([55.723661504206355, 37.56504308465882]);

  myMap.geoObjects.add(mark);
}