///<reference path="AchievementRequirement.ts"/>

class BerriesUnlockedRequirement extends AchievementRequirement {
    constructor(value: number, option: GameConstants.AchievementOption = GameConstants.AchievementOption.more) {
        super(value, option, GameConstants.AchievementType['Farming']);
    }

    public getProgress() {
        return Math.min( App.game.farming.unlockedBerries.filter(b => b()).length, this.requiredValue);
    }

    public hint(): string {
        return `${this.requiredValue} different Berry types need to be unlocked .`;
    }
}
