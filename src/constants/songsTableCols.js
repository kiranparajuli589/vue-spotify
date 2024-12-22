import SongTitle from "@/components/feature/search/songs/SongTitle.vue";


const SongsTableCols = [
  {
    field: "sn",
    headerName: "#",
    computedValue: (_, index) => index + 1,
    grid: "minmax(30px, 50px)",
    align: "right",
  },
  {
    field: "title",
    headerName: "Title",
    component: SongTitle,
    grid: 3
  },
  {
    field: "album",
    headerName: "Album",
    grid: 2,
  },
  {
    field: "duration",
    headerName: "Duration",
    width: 100,
  },
];

export default SongsTableCols;
