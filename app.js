class RockPaperScissor {
  constructor(humanWeapon, computerWeapon) {
    this.weapon = [
      {
        weaponName: "paper",
        imageUrl: "./images/icon-paper.svg",
        color: "bg-1",
      },
      {
        weaponName: "scissor",
        imageUrl: "./images/icon-scissors.svg",
        color: "bg-2",
      },
      {
        weaponName: "rock",
        imageUrl: "./images/icon-rock.svg",
        color: "bg-3",
      },
    ];

    this.humanWeapon = humanWeapon;
    this.computerWeapon = computerWeapon;
  }

  getHumanWeapon() {
    const weaponImage = this.weapon.filter(
      (element) => element.weaponName === this.humanWeapon
    );
    return weaponImage;
  }

  startBattle() {}
}
