# pixijs
Trying out Pixi JS 

## Chapter.js
1. `const chapter = new Chapter(1, 1, [1])` creates a new chapter with index 1, page count 1 and an array which specifies number of scroll triggers for each page respectively.
2. `chapter.addElements()` will add those elements to DOM.
3. `chapter.removeElements()` will remove those elements from DOM.
4. Each chapter will have `chapterN` trigger where N is the index of that chapter.
5. Each chapter will have `chapterNend` trigger. Use this to destroy elements of that chapter.
6. All the other triggers of that chapter are of type `chapterXpageYtriggerZ` where  X, Y and Z are chapter index, page number and trigger number respectively.__Note__ Page numbers and trigger number starts from 0.


Note: Use `marker: true` in Scroll trigger to view markers.
Try changing the positions of start and end to control the time of start of animations.

## Helpful Documentations
1. [ScrollTrigger](https://greensock.com/docs/v3/Plugins/PixiPlugin)
2. [PixiPlugin](https://greensock.com/docs/v3/Plugins/PixiPlugin)