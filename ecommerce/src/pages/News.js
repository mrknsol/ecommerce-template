import React from 'react';

const News = () => {
  return (
    <div class=" mx-auto lg:max-w-7xl mt-3 ">
	<div class="max-w-7xl mx-auto px-5 mb-3">
		<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
			<div
				class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
								technology acquisitions 2021</h5>
						</a>
						<div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Big case study</div>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse chronological order.</p>
						<a href="#"
							class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Read more
							<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"></path>
							</svg>
						</a>
					</div>
                    </a>
			</div>

		</div>
	</div>
</div>
  );
};

export default News;