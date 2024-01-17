const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
//const yesBtn = document.querySelector('.yes-btn');
//const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const nextBtn= document.querySelector(".next-btn")
yesBtn.addEventListener('click', () => {
    document.querySelector("img").src="peach-goma-goma-peach.gif"
    question.innerHTML = 'yayyyyyy!!'
    yesBtn.style.visibility="hidden";
    noBtn.style.visibility="hidden";

    wrapper.style.height="fit-content";
    wrapper.style.width ="fit-content";

    document.querySelector("p").textContent="I promise that I'll never do anything like this ever again and uhm this was much harder than writing poetry😅<br>It was my fault and I promise to always trust you and respect your friendships :] ...Also uhm this site is still glitchy cos well.. maine banai h and im rlly not good at this so.....If your'e reading this then msg m or uhh just tell it in school.Ik that this is not enough for an apology,but I promise that mai aisi behuda bakwaas naalayakon waali harkat phir kabhi nhi krunga...Alsoo i could've just texted u this but ye karna zroori tha cos yk..poetry but anyways i dont want your new year to go like this and i cant see you sad.Sorry for any spelling mistakes😅";   

});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
    document.querySelector("p").textContent=document.querySelector("p").textContent+"hehehehehe"
});


