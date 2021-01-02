import AbstractView from './abstract-view.js';

export default class extends AbstractView {

    constructor() {
        super();
        this.setTitle('Settings');
    }

    async getHTML() {
        return `
            <h1>Settings</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}