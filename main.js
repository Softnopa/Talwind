const elList = document.querySelector('.js-list')
const elSearch = document.querySelector('.js-search')

let allTodos = [];

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((result) => {
        allTodos = result;
        renderFunc(allTodos);
    });

elSearch.addEventListener('input', (e) => {
    const val = e.target.value;
    if (!val) {
        renderFunc(allTodos);
        return;
    }
    const filtered = allTodos.filter(todo => todo.id.toString() === val);
    renderFunc(filtered);
});

function renderFunc(arr) {
    elList.innerHTML = ''; 
    
    arr.forEach(el => {
        const elItem = document.createElement('li');
        const statusColor = el.completed ? 'text-emerald-400 bg-emerald-400/10' : 'text-amber-400 bg-amber-400/10';
        
        elItem.className = "group bg-slate-900/40 backdrop-blur-md px-6 py-5 rounded-2xl border border-slate-800 flex items-center justify-between hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-300 transform hover:-translate-y-1";
        
        elItem.innerHTML = `
            <div class="flex flex-col">
                <div class="flex items-center gap-3">
                    <span class="text-xs font-black text-indigo-400/80 uppercase tracking-widest px-2 py-0.5 rounded border border-indigo-500/30">ID #${el.id}</span>
                    <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${statusColor}">
                        ${el.completed ? 'Completed' : 'Pending'}
                    </span>
                </div>
                <h2 class="text-lg font-medium text-slate-200 mt-3 capitalize group-hover:text-white transition-colors">${el.title}</h2>
            </div>
            <div class="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:bg-indigo-600 group-hover:border-indigo-400 transition-all duration-300">
                <svg class="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
        `;
        
        elList.append(elItem);
    });
}
