class TabLink{
    constructor(element){
        this.element = element;
        console.log(this.element);
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-content[data-tab='${this.data}']`);

        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => this.select());
    }

    select(){
        const links = document.querySelectorAll('.tab');
        Array.from(links).forEach(function(tab){
            tab.classList.remove("active-tab");
        });

        this.element.classList.add("active-tab");

        this.tabItem.select();
    }
}

class TabItem{
    constructor(element){
        this.element = element;
    }

    select(){
        document.querySelectorAll(".tab-content").forEach(function(element){
            element.classList.add("hidden-content");
        });
        
        this.element.classList.remove("hidden-content");
        
    }
}

const links = document.querySelectorAll(".tab").forEach(function(tab){
    return new TabLink(tab);
});