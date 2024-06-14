
const DocumentSelect = () => {
  return (
  <div className="pb-5 border-b-[1px] border-third">
    <div className="text-xl text-primary dark:text-white font-medium mb-2">Choose Document Type</div>
    <div className="flex items-center">
      <label className="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor="1">
        <input name="color" type="radio"
          className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity "
          id="1" />
        <span
          className="absolute text-green-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label htmlFor="1" className="text-base text-primary dark:text-white font-medium">Driving license</label>
    </div>
    <div className="flex items-center">
      <label className="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor="2">
        <input name="color" type="radio"
          className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity "
          id="2" />
        <span
          className="absolute text-green-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label htmlFor="2" className="text-base text-primary dark:text-white font-medium">National ID</label>
    </div>
    <div className="flex items-center">
      <label className="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor="3">
        <input name="color" type="radio"
          className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity "
          id="3" />
        <span
          className="absolute text-green-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label htmlFor="3" className="text-base text-primary dark:text-white font-medium">Passport</label>
    </div>
  </div>

  );
}

export default DocumentSelect;