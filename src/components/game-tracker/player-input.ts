import { LitElement, html } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';

import { styles as sharedStyles } from '../../styles/shared-styles';

@customElement('player-input')
export class PlayerInput extends LitElement {
  static styles = sharedStyles;

  @property({ type: Array }) players: string[] = [];
  @state() newPlayer: string = '';
  @state() errorMessage: string = '';

  addPlayer() { // Add the event parameter
    console.log('addPlayer called');
    if (this.newPlayer && this.validatePlayerName(this.newPlayer)) {
        this.dispatchEvent(new CustomEvent('player-added', { detail: this.newPlayer }));
        this.newPlayer = '';
        const inputElement = this.shadowRoot!.querySelector('sl-input');
        if(inputElement){
          inputElement.helpText = '';
        }
    } else {
      const inputElement = this.shadowRoot!.querySelector('sl-input');
      if(inputElement){
        inputElement.helpText = this.errorMessage;
      }
    }
  }

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newPlayer = input.value;
    const inputElement = this.shadowRoot!.querySelector('sl-input');
    if(inputElement){
        if(!this.validatePlayerName(this.newPlayer)){
          inputElement.helpText = this.errorMessage;
        } else{
          inputElement.helpText = '';
        }
    }
  }

  validatePlayerName(playerName: string){
    const isValid = /^[a-zA-Z0-9]+$/.test(playerName);
    console.log('isValid:', isValid);
    if (isValid) {
      this.errorMessage = '';
      return true;
    } else {
      this.errorMessage = 'Enter a Name containing only letters or numbers with no spaces or special characters.';
      return false;
    }
  }

  removePlayer(playerName: string) {
    this.dispatchEvent(new CustomEvent('remove-player', { detail: playerName }));
  }

  clearAllPlayers() {
    this.dispatchEvent(new CustomEvent('clear-all-players'));
  }

  render() {
    return html`
      <sl-card>
        <div slot="header">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            Player Setup
            <sl-tooltip content="Clear Player List">
              <sl-button label="clear player list" variant="warning" size="small" pill outline @click=${this.clearAllPlayers}>
                <sl-icon slot="prefix" library="default" name="trash-fill" label="Clear Standings">
                </sl-icon>
                <span class="hide-at-800">Clear</span> Players
              </sl-button>
            </sl-tooltip>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; grid-gap: .5rem; justify-content: space-between; flex-wrap: wrap;">
          <form class="input-validation-custom">
            <sl-input
              .value=${this.newPlayer}
              @sl-input=${this.handleInputChange}
              spellcheck="true"
              name="name"
              label="Name"
              pill
              required
              clearable
              autocomplete="off"
              help-text=${this.errorMessage}
              class="player-input"
              style="width: 25rem;"
            >
              <sl-icon library="default" name="person" slot="prefix"></sl-icon>
            </sl-input>
            <sl-button type="button" variant="primary" pill outline @click=${this.addPlayer} class="larger-icon">
              <sl-icon library="default" slot="prefix" name="person-fill-add"></sl-icon>
              Add Player
            </sl-button>
          </form>
          <div>
            <p style="margin-top: .25rem; margin-bottom: .25rem;">
              <strong>Players</strong>
            </p>
            <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: flex-start; grid-gap: .5rem; width: 100%;">
              ${this.players.map(player => html`
                <sl-tag removable @sl-remove=${() => this.removePlayer(player)}>
                  ${player}
                </sl-tag>
              `)}
            </div>
          </div>
        </div>
      </sl-card>
      <style>
        sl-card {
          width: 100%;
        }
        .player-input::part(form-control-help-text) {
          color: var(--sl-color-danger-600);
        }
        .player-input::part(form-control-help-text)[attr="All fixed!"] {
          color: var(--sl-color-success-600);
        }
        .input-validation-custom {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: .5rem;
        }
      </style>
      `;
    }
}
