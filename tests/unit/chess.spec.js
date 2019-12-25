/* eslint-disable */
import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
    it('displays an empty state', () => {
        const { vm } = mount({
            components: { App },
            template: `<App />`,
        });

        expect(vm.$el.querySelector('[data-empty]')).not.toBe(null);
    });

    it('displays a list of items that have been clicked', async () => {
        const { vm } = mount({
            components: { App },
            template: `<App />`,
        });

        vm.$el.querySelector('[data-square="f7"]').click();
        await vm.$nextTick();
        expect(vm.$el.querySelector('[data-history="0"]').textContent).toBe('f7');

        vm.$el.querySelector('[data-square="c2"]').click();
        await vm.$nextTick();
        expect(vm.$el.querySelector('[data-history="1"]').textContent).toBe('c2');
    });

    it('toggles an elements highlighted state when clicked', async () => {
        const { vm } = mount({
            components: { App },
            template: `<App />`,
        });

        const f7 = vm.$el.querySelector('[data-square="f7"] div');

        f7.click();
        await vm.$nextTick();
        expect(f7.classList.contains('border-4')).toBe(true);

        f7.click();
        await vm.$nextTick();
        expect(f7.classList.contains('border-4')).toBe(false);
    });
});
