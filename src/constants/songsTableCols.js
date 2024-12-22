import SongTitle from "@/components/feature/search/songs/SongTitle.vue";
import SnWithPlayBtn from "@/components/feature/search/songs/SnWithPlayBtn.vue";

const sn = {
  field: "sn",
  headerName: "#",
  computedValue: (_, index) => index + 1,
  grid: "minmax(30px, 60px)",
  align: "right",
}
const title = {
  field: "title",
  headerName: "Title",
  component: SongTitle,
  grid: 3
}
const duration = {
  field: "duration",
  headerName: "Duration",
  width: 100,
}

export const SongsTableCols = [
  sn,
  title,
  {
    field: "album",
    headerName: "Album",
    grid: 2,
  },
  duration,
]

export const AlbumSongsTableCols = [
  {
    ...sn,
    component: SnWithPlayBtn,
    align: "center"
  },
  title,
  {
    ...duration,
    computedValue: (rD) => {
      const value = rD.duration;
      const minutes = Math.floor(value / 60);
      const seconds = value % 60;
      return `${minutes} min ${seconds} sec`;
    }
  },
]
