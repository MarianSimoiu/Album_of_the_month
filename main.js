// ===== Real-time listener for featured album updates =====
// This ensures the featured album displays immediately without waiting for weeklyAlbums
(async () => {
  const weekId = getCurrentWeekId();
  onSnapshot(doc(db, "featuredAlbum", weekId), (docSnap) => {
    if (docSnap.exists()) {
      console.log("Featured album listener: album updated", docSnap.data());
      updateFeaturedAlbum(docSnap.data());
    } else {
      console.log("Featured album listener: no featured album set for week", weekId);
    }
  }, (error) => {
    console.error("Featured album listener error:", error);
  });
})();