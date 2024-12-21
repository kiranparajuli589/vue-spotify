const GoToArtistRadio =   {
    title: "Go to artist radio",
    icon: new URL('@/assets/icons/contextMenu/radio.svg', import.meta.url).href,
  }
const ArrowRight = new URL('@/assets/icons/contextMenu/arrow_right.svg', import.meta.url).href
const Share = {
    title: "Share",
    icon: new URL('@/assets/icons/contextMenu/share.svg', import.meta.url).href,
    endIcon: ArrowRight,
    children: [
      {
        title: "Copy link to artist",
        icon: new URL('@/assets/icons/contextMenu/copy.svg', import.meta.url).href,
      },
      {
        title: "Embed artist",
        icon: new URL('@/assets/icons/contextMenu/embed.svg', import.meta.url).href,
      },
    ],
    open: false, // Track submenu state
  }
const OpenInDesktop = {
  title: "Open in Desktop app",
  icon: "/logo.png",
  bottom: true,
}
const Report = {
  title: "Report",
  icon: new URL('@/assets/icons/contextMenu/report.svg', import.meta.url).href,
  endIcon: new URL('@/assets/icons/contextMenu/open_in_new.svg', import.meta.url).href,
}

const BlockIcon = new URL('@/assets/icons/contextMenu/block.svg', import.meta.url).href
export const ArtistCardContextMenu = [
  {
    title: "Follow",
    icon: new URL('@/assets/icons/contextMenu/follow.svg', import.meta.url).href,
  },
  {
    title: "Don't play this artist",
    icon: BlockIcon,
  },
  GoToArtistRadio,
  Share,
  OpenInDesktop
];

// add to your library
// go to artist radio - c
// add to playlist
// share - c
// open in desktop - c

const AddToYourLibrary = {
  title: "Add to Your Library",
  icon: new URL('@/assets/icons/contextMenu/add_circle.svg', import.meta.url).href,
}

export const AlbumCardContextMenu = [
  AddToYourLibrary,
  GoToArtistRadio,
  {
    title: "Add to Playlist",
    icon: new URL('@/assets/icons/contextMenu/playlist.svg', import.meta.url).href,
    endIcon: ArrowRight,
    children: [
      {
        title: "New Playlist",
        icon: new URL('@/assets/icons/svgs/plus.svg', import.meta.url).href,
      },
      {
        title: "Liked Songs",
        icon: new URL('@/assets/icons/contextMenu/genres.svg', import.meta.url).href,
      },
    ],
  },
  Share,
  OpenInDesktop
]

export const PopularRadioContextMenu = [
  AddToYourLibrary,
  {
    ...Report,
    disabled: true
  },
  {
    icon: BlockIcon,
    title: "Exclude from your taste profile"
  },
  {
    title: "Add to folder",
    icon: new URL('@/assets/icons/contextMenu/folder.svg', import.meta.url).href,
    endIcon: ArrowRight,
    children: [
      // add html from here
    ]
  },
  {
    title: "About Recommendations",
    icon: new URL('@/assets/icons/contextMenu/help.svg', import.meta.url).href,
  },
  OpenInDesktop
]


