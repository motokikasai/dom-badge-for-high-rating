const buttonListUp = document.querySelectorAll(`.up`);
const buttonListDown = document.querySelectorAll(`.down`);

function compare(allCounters) {
  const counterArray = Array.from(allCounters).map(element =>
    Number(element.innerText)
  );
  return Math.max(...counterArray);
}

function displayBadge() {
  const allCounters = document.querySelectorAll(`h2 span`);
  const maxVotes = compare(allCounters);

  for (let i = 0; i < allCounters.length; i++) {
    const element = allCounters[i];
    console.log(element);
    const badge = element.parentElement
      .closest(`section`)
      .querySelector(`.badge`);

    if (
      maxVotes === Number(element.innerText) &&
      0 !== Number(element.innerText)
    ) {
      badge.style.visibility = "visible";
    } else {
      badge.style.visibility = "hidden";
    }
  }
}

for (let i = 0; i < buttonListUp.length; i++) {
  let button = buttonListUp[i];

  button.addEventListener(`click`, e => {
    let counter = e.target.closest(`section`).querySelector(`h2 span`)
      .innerText; // closest to target section    span as the child of h2
    counter++;
    e.target.closest(`section`).querySelector(`h2 span`).innerText = counter;

    displayBadge();
  });
}

for (let i = 0; i < buttonListDown.length; i++) {
  let button = buttonListDown[i];

  button.addEventListener(`click`, e => {
    let counter = e.target.parentElement.previousElementSibling.querySelector(
      `span`
    ).innerText; // another way of targeting span like seen with "closest" above
    if (counter > 0) {
      counter--;
      e.target.parentElement.previousElementSibling.querySelector(
        `span`
      ).innerText = counter;
    }

    displayBadge();
  });
}
