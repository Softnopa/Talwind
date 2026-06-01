const elList = document.querySelector('.js-list')
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((result) => renderFunc(result));

function renderFunc(arr) {
    elList.innerHTML = ''; // Clear the list before rendering
    
    arr.forEach(el => {
        const elItem = document.createElement('li');
        
        // Apply card styling and inner HTML structure
        elItem.className = "bg-white px-6 py-5 shadow-sm rounded-xl border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow duration-200";
        elItem.innerHTML = `
            <div class="flex flex-col">
                <span class="text-xs font-bold text-indigo-600 uppercase tracking-wide">ID: #${el.id}</span>
                <h2 class="text-lg font-semibold text-gray-800 mt-1 capitalize">${el.title}</h2>
            </div>
            <div class="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
        `;
        
        elList.append(elItem);
    });
}
