function ScannedItem() {
    return (
        <main class="absolute top-0 left-0 right-0 bottom-0">
        <div class="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row">
          <div class="md:w-1/3 mb-6 md:mb-0">
            <img id="book-image" class="w-full h-auto rounded" src="https://via.placeholder.com/150" alt="Book Cover"/>
          </div>
          <div class="md:w-2/3 md:pl-6">
            <h2 class="text-3xl font-semibold mb-4">The Great Gatsby</h2>
            <div class="mb-4">
              <h3 class="text-xl font-medium">Author:</h3>
              <p id="book-author" class="text-lg text-gray-700">F. Scott Fitzgerald</p>
            </div>
            <div class="mb-4">
              <h3 class="text-xl font-medium">Year:</h3>
              <p id="book-year" class="text-lg text-gray-700">1925</p>
            </div>
            <div class="mb-4">
              <h3 class="text-xl font-medium">Description:</h3>
              <p id="book-description" class="text-lg text-gray-700">
                A novel of the Jazz Age, The Great Gatsby tells the story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.
              </p>
            </div>
            <div class="flex justify-between w-full">
  <div class="flex space-x-4">
    <button id="take-button" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Take</button>
    <button id="leave-button" class="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Leave</button>
  </div>
  <button id="scan-again-button" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Scan Again</button>
</div>
          </div>
        </div>
      </main>
    )
}

export default ScannedItem;