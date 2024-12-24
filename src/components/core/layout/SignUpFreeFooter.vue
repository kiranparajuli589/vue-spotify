<template>
  <footer class="preview_of_spotify_footer">
    <div class="info">
      <h5>Preview of Spotify</h5>
      <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
    </div>
    <div class="actions">
      <button class="filled-btn">
        Sign up free
      </button>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.preview_of_spotify_footer {
  background-image: linear-gradient(90deg, #af2896,#509bf5);
  padding: 8px;
  color: white;
  margin-top: 10px;

  font-size: .875rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  .info {
    flex-grow: 1;
    h5 {
      font-size: .875rem;
      font-weight: 600;
    }
  }

  .actions {
    height: 100%;
    button {
      height: 100%;
      padding-inline: 1rem;
      font-weight: 600;
    }
  }
}
</style>
