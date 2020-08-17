export default class CommitCard{
    constructor(data){
        this.data= data;
        console.log("aaa")
    }
    create(){
        const commit = document.createElement('div')
        const commitDate = document.createElement('p')
        const commitBox = document.createElement('div')
        const commitImg = document.createElement('img')
        const commitContain = document.createElement('div')
        const commitHead = document.createElement('h2')
        const commitText = document.createElement('p')
        const commitAbout = document.createElement('p')
        commit.classList.add('swiper-slide')
        commitDate.classList.add('slider__header')
        commitDate.classList.add('slider__header_white')
        commitBox.classList.add('slider__box')
        commitImg.classList.add('slider__img')
        commitContain.classList.add('slider__container')
        commitHead.classList.add('slider__author')
        commitText.classList.add('slider__header')
        commitText.classList.add('slider__header_black')
        commitAbout.classList.add('slider__text')
        commitImg.setAttribute('src', this.data.author.avatar_url)
        commitDate.textContent = this.data.commit.committer.date
        commitText.textContent = this.data.commit.committer.email
        commitHead.textContent = this.data.commit.committer.name;
        commitAbout.textContent = this.data.commit.message;
        commit.appendChild(commitDate)
        commit.appendChild(commitBox)
        commit.appendChild(commitAbout)
        commitBox.appendChild(commitImg)
        commitBox.appendChild(commitContain)
        commitContain.appendChild(commitHead)
        commitContain.appendChild(commitText)
        return commit;
    }
} 