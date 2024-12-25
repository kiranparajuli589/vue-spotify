import {faker} from "@faker-js/faker";

export const getRandomLoremFlickerImage = () => {
  return faker.image.urlPicsumPhotos({
    width: 350,
    height: 350,
    blur: 0
  })
}

export const getDataGridClasses = (classes = {}) => ({
  header: `grid__header ${classes?.header || ""}`,
  body: `grid__body overflow-y-auto ${classes?.body || ""}`,
  row: `grid__row ${classes?.row || ""}`,
  cell: `grid__cell p-2 ${classes?.cell || ""}`,
  root: `grid__root ${classes?.root || ""}`,
  actions: `grid__actions ${classes?.actions || ""}`,
  action: `grid__action ${classes?.action || ""}`,
  empty: `grid__empty ${classes?.empty || ""}`,
  loadingRow: `grid__loading_row ${classes?.loadingRow || ""}`,
  loadingCell: `grid__loading_cell ${classes?.loadingCell || ""}`,
});


// 456783038 -> 456,783,038
export const formatNumberWithComma = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getAvatarUrl = () => `https://xsgames.co/randomusers/assets/avatars/${faker.person.sex()}/${faker.number.int({min: 1, max: 78})}.jpg`

