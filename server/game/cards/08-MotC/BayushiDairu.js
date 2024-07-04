const DrawCard = require('../../drawcard.js');
const AbilityDsl = require('../../abilitydsl');
const { TargetModes, CardTypes } = require('../../Constants');

class BayushiDairu extends DrawCard {
    setupCardAbilities() {
        this.action({
            title: 'Move a status token to this character',
            condition: context => context.source.isParticipating(),
            target: {
                mode: TargetModes.Token,
                cardType: CardTypes.Character,
                gameAction: AbilityDsl.actions.moveStatusToken(context => ({ recipient: context.source }))
            }
        });
    }
}

BayushiDairu.id = 'bayushi-dairu';

module.exports = BayushiDairu;
