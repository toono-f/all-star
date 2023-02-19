---
to: "<%= category !== 'functional' ? `src/components/${category}/${componentName}/${componentName}.module.scss` : null %>"
---
.<%= h.changeCase.param(componentName); %> {
}
