module.exports = {
    navigation: {
      enable: true,
      config:
      {
        additionalFields: [],
        contentTypes: ['api::page.page'],
        contentTypesNameFields: {
          'api::page.page': ['name']
        },
        contentTypesPopulate: {},
        allowedLevels: 2,
        gql: { navigationItemRelated: ['Homepage'] },
        i18nEnabled: false,
        pruneObsoleteI18nNavigations: false,
      },
    },
    graphql: {
      enabled: true,
      config: {
        defaultLimit: 100,
        maxLimit: 200,
      },
    }
  }