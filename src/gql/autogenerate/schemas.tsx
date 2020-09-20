export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  JSONString: any
  Date: any
  UUID: any
  _Any: any
  Decimal: any
  WeightScalar: any
  Upload: any
  GenericScalar: any
}

export type IQuery = {
  __typename?: 'Query'
  webhook?: Maybe<IWebhook>
  /** @deprecated Use webhooks field on app(s) query instead. This field will be removed after 2020-07-31. */
  webhooks?: Maybe<IWebhookCountableConnection>
  webhookEvents?: Maybe<Array<Maybe<IWebhookEvent>>>
  webhookSamplePayload?: Maybe<Scalars['JSONString']>
  warehouse?: Maybe<IWarehouse>
  warehouses?: Maybe<IWarehouseCountableConnection>
  translations?: Maybe<ITranslatableItemConnection>
  translation?: Maybe<ITranslatableItem>
  stock?: Maybe<IStock>
  stocks?: Maybe<IStockCountableConnection>
  shop: IShop
  shippingZone?: Maybe<IShippingZone>
  shippingZones?: Maybe<IShippingZoneCountableConnection>
  digitalContent?: Maybe<IDigitalContent>
  digitalContents?: Maybe<IDigitalContentCountableConnection>
  attributes?: Maybe<IAttributeCountableConnection>
  attribute?: Maybe<IAttribute>
  categories?: Maybe<ICategoryCountableConnection>
  category?: Maybe<ICategory>
  collection?: Maybe<ICollection>
  collections?: Maybe<ICollectionCountableConnection>
  product?: Maybe<IProduct>
  products?: Maybe<IProductCountableConnection>
  productType?: Maybe<IProductType>
  productTypes?: Maybe<IProductTypeCountableConnection>
  productVariant?: Maybe<IProductVariant>
  productVariants?: Maybe<IProductVariantCountableConnection>
  reportProductSales?: Maybe<IProductVariantCountableConnection>
  payment?: Maybe<IPayment>
  payments?: Maybe<IPaymentCountableConnection>
  page?: Maybe<IPage>
  pages?: Maybe<IPageCountableConnection>
  homepageEvents?: Maybe<IOrderEventCountableConnection>
  order?: Maybe<IOrder>
  orders?: Maybe<IOrderCountableConnection>
  draftOrders?: Maybe<IOrderCountableConnection>
  ordersTotal?: Maybe<ITaxedMoney>
  orderByToken?: Maybe<IOrder>
  menu?: Maybe<IMenu>
  menus?: Maybe<IMenuCountableConnection>
  menuItem?: Maybe<IMenuItem>
  menuItems?: Maybe<IMenuItemCountableConnection>
  giftCard?: Maybe<IGiftCard>
  giftCards?: Maybe<IGiftCardCountableConnection>
  plugin?: Maybe<IPlugin>
  plugins?: Maybe<IPluginCountableConnection>
  sale?: Maybe<ISale>
  sales?: Maybe<ISaleCountableConnection>
  voucher?: Maybe<IVoucher>
  vouchers?: Maybe<IVoucherCountableConnection>
  taxTypes?: Maybe<Array<Maybe<ITaxType>>>
  checkout?: Maybe<ICheckout>
  checkouts?: Maybe<ICheckoutCountableConnection>
  checkoutLine?: Maybe<ICheckoutLine>
  checkoutLines?: Maybe<ICheckoutLineCountableConnection>
  apps?: Maybe<IAppCountableConnection>
  app?: Maybe<IApp>
  addressValidationRules?: Maybe<IAddressValidationData>
  address?: Maybe<IAddress>
  customers?: Maybe<IUserCountableConnection>
  permissionGroups?: Maybe<IGroupCountableConnection>
  permissionGroup?: Maybe<IGroup>
  me?: Maybe<IUser>
  staffUsers?: Maybe<IUserCountableConnection>
  /** @deprecated Use the `apps` query instead. This field will be removed after 2020-07-31. */
  serviceAccounts?: Maybe<IServiceAccountCountableConnection>
  /** @deprecated Use the `app` query instead. This field will be removed after 2020-07-31. */
  serviceAccount?: Maybe<IServiceAccount>
  user?: Maybe<IUser>
  _entities?: Maybe<Array<Maybe<I_Entity>>>
  _service?: Maybe<I_Service>
}

export type IQueryWebhookArgs = {
  id: Scalars['ID']
}

export type IQueryWebhooksArgs = {
  sortBy?: Maybe<IWebhookSortingInput>
  filter?: Maybe<IWebhookFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryWebhookSamplePayloadArgs = {
  eventType: IWebhookSampleEventTypeEnum
}

export type IQueryWarehouseArgs = {
  id: Scalars['ID']
}

export type IQueryWarehousesArgs = {
  filter?: Maybe<IWarehouseFilterInput>
  sortBy?: Maybe<IWarehouseSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryTranslationsArgs = {
  kind: ITranslatableKinds
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryTranslationArgs = {
  id: Scalars['ID']
  kind: ITranslatableKinds
}

export type IQueryStockArgs = {
  id: Scalars['ID']
}

export type IQueryStocksArgs = {
  filter?: Maybe<IStockFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryShippingZoneArgs = {
  id: Scalars['ID']
}

export type IQueryShippingZonesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryDigitalContentArgs = {
  id: Scalars['ID']
}

export type IQueryDigitalContentsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryAttributesArgs = {
  filter?: Maybe<IAttributeFilterInput>
  sortBy?: Maybe<IAttributeSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryAttributeArgs = {
  id: Scalars['ID']
}

export type IQueryCategoriesArgs = {
  filter?: Maybe<ICategoryFilterInput>
  sortBy?: Maybe<ICategorySortingInput>
  level?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryCategoryArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type IQueryCollectionArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type IQueryCollectionsArgs = {
  filter?: Maybe<ICollectionFilterInput>
  sortBy?: Maybe<ICollectionSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryProductArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type IQueryProductsArgs = {
  filter?: Maybe<IProductFilterInput>
  sortBy?: Maybe<IProductOrder>
  stockAvailability?: Maybe<IStockAvailability>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryProductTypeArgs = {
  id: Scalars['ID']
}

export type IQueryProductTypesArgs = {
  filter?: Maybe<IProductTypeFilterInput>
  sortBy?: Maybe<IProductTypeSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryProductVariantArgs = {
  id: Scalars['ID']
}

export type IQueryProductVariantsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryReportProductSalesArgs = {
  period: IReportingPeriod
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryPaymentArgs = {
  id: Scalars['ID']
}

export type IQueryPaymentsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryPageArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type IQueryPagesArgs = {
  sortBy?: Maybe<IPageSortingInput>
  filter?: Maybe<IPageFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryHomepageEventsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryOrderArgs = {
  id: Scalars['ID']
}

export type IQueryOrdersArgs = {
  sortBy?: Maybe<IOrderSortingInput>
  filter?: Maybe<IOrderFilterInput>
  created?: Maybe<IReportingPeriod>
  status?: Maybe<IOrderStatusFilter>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryDraftOrdersArgs = {
  sortBy?: Maybe<IOrderSortingInput>
  filter?: Maybe<IOrderDraftFilterInput>
  created?: Maybe<IReportingPeriod>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryOrdersTotalArgs = {
  period?: Maybe<IReportingPeriod>
}

export type IQueryOrderByTokenArgs = {
  token: Scalars['UUID']
}

export type IQueryMenuArgs = {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type IQueryMenusArgs = {
  sortBy?: Maybe<IMenuSortingInput>
  filter?: Maybe<IMenuFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryMenuItemArgs = {
  id: Scalars['ID']
}

export type IQueryMenuItemsArgs = {
  sortBy?: Maybe<IMenuItemSortingInput>
  filter?: Maybe<IMenuItemFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryGiftCardArgs = {
  id: Scalars['ID']
}

export type IQueryGiftCardsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryPluginArgs = {
  id: Scalars['ID']
}

export type IQueryPluginsArgs = {
  filter?: Maybe<IPluginFilterInput>
  sortBy?: Maybe<IPluginSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQuerySaleArgs = {
  id: Scalars['ID']
}

export type IQuerySalesArgs = {
  filter?: Maybe<ISaleFilterInput>
  sortBy?: Maybe<ISaleSortingInput>
  query?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryVoucherArgs = {
  id: Scalars['ID']
}

export type IQueryVouchersArgs = {
  filter?: Maybe<IVoucherFilterInput>
  sortBy?: Maybe<IVoucherSortingInput>
  query?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryCheckoutArgs = {
  token?: Maybe<Scalars['UUID']>
}

export type IQueryCheckoutsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryCheckoutLineArgs = {
  id?: Maybe<Scalars['ID']>
}

export type IQueryCheckoutLinesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryAppsArgs = {
  filter?: Maybe<IAppFilterInput>
  sortBy?: Maybe<IAppSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryAppArgs = {
  id: Scalars['ID']
}

export type IQueryAddressValidationRulesArgs = {
  countryCode: ICountryCode
  countryArea?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  cityArea?: Maybe<Scalars['String']>
}

export type IQueryAddressArgs = {
  id: Scalars['ID']
}

export type IQueryCustomersArgs = {
  filter?: Maybe<ICustomerFilterInput>
  sortBy?: Maybe<IUserSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryPermissionGroupsArgs = {
  filter?: Maybe<IPermissionGroupFilterInput>
  sortBy?: Maybe<IPermissionGroupSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryPermissionGroupArgs = {
  id: Scalars['ID']
}

export type IQueryStaffUsersArgs = {
  filter?: Maybe<IStaffUserInput>
  sortBy?: Maybe<IUserSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryServiceAccountsArgs = {
  filter?: Maybe<IServiceAccountFilterInput>
  sortBy?: Maybe<IServiceAccountSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryServiceAccountArgs = {
  id: Scalars['ID']
}

export type IQueryUserArgs = {
  id: Scalars['ID']
}

export type IQuery_EntitiesArgs = {
  representations?: Maybe<Array<Maybe<Scalars['_Any']>>>
}

export type IWebhook = INode & {
  __typename?: 'Webhook'
  name: Scalars['String']
  targetUrl: Scalars['String']
  isActive: Scalars['Boolean']
  secretKey?: Maybe<Scalars['String']>
  id: Scalars['ID']
  events: Array<IWebhookEvent>
  /** @deprecated Use the `app` field instead. This field will be removed after 2020-07-31. */
  serviceAccount: IServiceAccount
  app: IApp
}

export type INode = {
  id: Scalars['ID']
}

export type IWebhookEvent = {
  __typename?: 'WebhookEvent'
  eventType: IWebhookEventTypeEnum
  name: Scalars['String']
}

export enum IWebhookEventTypeEnum {
  AnyEvents = 'ANY_EVENTS',
  OrderCreated = 'ORDER_CREATED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderFulfilled = 'ORDER_FULFILLED',
  CustomerCreated = 'CUSTOMER_CREATED',
  ProductCreated = 'PRODUCT_CREATED',
  CheckoutQuantityChanged = 'CHECKOUT_QUANTITY_CHANGED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
}

export type IServiceAccount = INode &
  IObjectWithMetadata & {
    __typename?: 'ServiceAccount'
    id: Scalars['ID']
    name?: Maybe<Scalars['String']>
    created?: Maybe<Scalars['DateTime']>
    isActive?: Maybe<Scalars['Boolean']>
    permissions?: Maybe<Array<Maybe<IPermission>>>
    tokens?: Maybe<Array<Maybe<IServiceAccountToken>>>
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
  }

export type IObjectWithMetadata = {
  privateMetadata: Array<Maybe<IMetadataItem>>
  metadata: Array<Maybe<IMetadataItem>>
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<IMetaStore>>
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<IMetaStore>>
}

export type IMetadataItem = {
  __typename?: 'MetadataItem'
  key: Scalars['String']
  value: Scalars['String']
}

export type IMetaStore = {
  __typename?: 'MetaStore'
  namespace: Scalars['String']
  clients: Array<Maybe<IMetaClientStore>>
}

export type IMetaClientStore = {
  __typename?: 'MetaClientStore'
  name: Scalars['String']
  metadata: Array<Maybe<IMetaItem>>
}

export type IMetaItem = {
  __typename?: 'MetaItem'
  key: Scalars['String']
  value: Scalars['String']
}

export type IPermission = {
  __typename?: 'Permission'
  code: IPermissionEnum
  name: Scalars['String']
}

export enum IPermissionEnum {
  ManageUsers = 'MANAGE_USERS',
  ManageStaff = 'MANAGE_STAFF',
  ManageServiceAccounts = 'MANAGE_SERVICE_ACCOUNTS',
  ManageApps = 'MANAGE_APPS',
  ManageDiscounts = 'MANAGE_DISCOUNTS',
  ManagePlugins = 'MANAGE_PLUGINS',
  ManageGiftCard = 'MANAGE_GIFT_CARD',
  ManageMenus = 'MANAGE_MENUS',
  ManageOrders = 'MANAGE_ORDERS',
  ManagePages = 'MANAGE_PAGES',
  ManageProducts = 'MANAGE_PRODUCTS',
  ManageShipping = 'MANAGE_SHIPPING',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageTranslations = 'MANAGE_TRANSLATIONS',
  ManageWebhooks = 'MANAGE_WEBHOOKS',
  ManageCheckouts = 'MANAGE_CHECKOUTS',
}

export type IServiceAccountToken = INode & {
  __typename?: 'ServiceAccountToken'
  name?: Maybe<Scalars['String']>
  authToken?: Maybe<Scalars['String']>
  id: Scalars['ID']
}

export type IApp = INode &
  IObjectWithMetadata & {
    __typename?: 'App'
    id: Scalars['ID']
    name?: Maybe<Scalars['String']>
    created?: Maybe<Scalars['DateTime']>
    isActive?: Maybe<Scalars['Boolean']>
    permissions?: Maybe<Array<Maybe<IPermission>>>
    tokens?: Maybe<Array<Maybe<IAppToken>>>
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    webhooks?: Maybe<Array<Maybe<IWebhook>>>
  }

export type IAppToken = INode & {
  __typename?: 'AppToken'
  name?: Maybe<Scalars['String']>
  authToken?: Maybe<Scalars['String']>
  id: Scalars['ID']
}

export type IWebhookCountableConnection = {
  __typename?: 'WebhookCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IWebhookCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IPageInfo = {
  __typename?: 'PageInfo'
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
  endCursor?: Maybe<Scalars['String']>
}

export type IWebhookCountableEdge = {
  __typename?: 'WebhookCountableEdge'
  node: IWebhook
  cursor: Scalars['String']
}

export type IWebhookSortingInput = {
  direction: IOrderDirection
  field: IWebhookSortField
}

export enum IOrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum IWebhookSortField {
  Name = 'NAME',
  ServiceAccount = 'SERVICE_ACCOUNT',
  TargetUrl = 'TARGET_URL',
  App = 'APP',
}

export type IWebhookFilterInput = {
  search?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
}

export enum IWebhookSampleEventTypeEnum {
  OrderCreated = 'ORDER_CREATED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderFulfilled = 'ORDER_FULFILLED',
  CustomerCreated = 'CUSTOMER_CREATED',
  ProductCreated = 'PRODUCT_CREATED',
  CheckoutQuantityChanged = 'CHECKOUT_QUANTITY_CHANGED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
}

export type IWarehouse = INode & {
  __typename?: 'Warehouse'
  id: Scalars['ID']
  name: Scalars['String']
  slug: Scalars['String']
  companyName: Scalars['String']
  shippingZones: IShippingZoneCountableConnection
  address: IAddress
  email: Scalars['String']
}

export type IWarehouseShippingZonesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IShippingZoneCountableConnection = {
  __typename?: 'ShippingZoneCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IShippingZoneCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IShippingZoneCountableEdge = {
  __typename?: 'ShippingZoneCountableEdge'
  node: IShippingZone
  cursor: Scalars['String']
}

export type IShippingZone = INode & {
  __typename?: 'ShippingZone'
  id: Scalars['ID']
  name: Scalars['String']
  default: Scalars['Boolean']
  priceRange?: Maybe<IMoneyRange>
  countries?: Maybe<Array<Maybe<ICountryDisplay>>>
  shippingMethods?: Maybe<Array<Maybe<IShippingMethod>>>
  warehouses?: Maybe<Array<Maybe<IWarehouse>>>
}

export type IMoneyRange = {
  __typename?: 'MoneyRange'
  start?: Maybe<IMoney>
  stop?: Maybe<IMoney>
}

export type IMoney = {
  __typename?: 'Money'
  currency: Scalars['String']
  amount: Scalars['Float']
  /** @deprecated Price formatting according to the current locale should be handled by the frontend client. This field will be removed after 2020-07-31. */
  localized: Scalars['String']
}

export type ICountryDisplay = {
  __typename?: 'CountryDisplay'
  code: Scalars['String']
  country: Scalars['String']
  vat?: Maybe<IVat>
}

export type IVat = {
  __typename?: 'VAT'
  countryCode: Scalars['String']
  standardRate?: Maybe<Scalars['Float']>
  reducedRates: Array<Maybe<IReducedRate>>
}

export type IReducedRate = {
  __typename?: 'ReducedRate'
  rate: Scalars['Float']
  rateType: ITaxRateType
}

export enum ITaxRateType {
  Accommodation = 'ACCOMMODATION',
  AdmissionToCulturalEvents = 'ADMISSION_TO_CULTURAL_EVENTS',
  AdmissionToEntertainmentEvents = 'ADMISSION_TO_ENTERTAINMENT_EVENTS',
  AdmissionToSportingEvents = 'ADMISSION_TO_SPORTING_EVENTS',
  Advertising = 'ADVERTISING',
  AgriculturalSupplies = 'AGRICULTURAL_SUPPLIES',
  BabyFoodstuffs = 'BABY_FOODSTUFFS',
  Bikes = 'BIKES',
  Books = 'BOOKS',
  ChildrensClothing = 'CHILDRENS_CLOTHING',
  DomesticFuel = 'DOMESTIC_FUEL',
  DomesticServices = 'DOMESTIC_SERVICES',
  EBooks = 'E_BOOKS',
  Foodstuffs = 'FOODSTUFFS',
  Hotels = 'HOTELS',
  Medical = 'MEDICAL',
  Newspapers = 'NEWSPAPERS',
  PassengerTransport = 'PASSENGER_TRANSPORT',
  Pharmaceuticals = 'PHARMACEUTICALS',
  PropertyRenovations = 'PROPERTY_RENOVATIONS',
  Restaurants = 'RESTAURANTS',
  SocialHousing = 'SOCIAL_HOUSING',
  Standard = 'STANDARD',
  Water = 'WATER',
  Wine = 'WINE',
}

export type IShippingMethod = INode & {
  __typename?: 'ShippingMethod'
  id: Scalars['ID']
  name: Scalars['String']
  price?: Maybe<IMoney>
  minimumOrderPrice?: Maybe<IMoney>
  maximumOrderPrice?: Maybe<IMoney>
  minimumOrderWeight?: Maybe<IWeight>
  maximumOrderWeight?: Maybe<IWeight>
  type?: Maybe<IShippingMethodTypeEnum>
  translation?: Maybe<IShippingMethodTranslation>
}

export type IShippingMethodTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IWeight = {
  __typename?: 'Weight'
  unit: Scalars['String']
  value: Scalars['Float']
}

export enum IShippingMethodTypeEnum {
  Price = 'PRICE',
  Weight = 'WEIGHT',
}

export type IShippingMethodTranslation = INode & {
  __typename?: 'ShippingMethodTranslation'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  language: ILanguageDisplay
}

export type ILanguageDisplay = {
  __typename?: 'LanguageDisplay'
  code: ILanguageCodeEnum
  language: Scalars['String']
}

export enum ILanguageCodeEnum {
  Ar = 'AR',
  Az = 'AZ',
  Bg = 'BG',
  Bn = 'BN',
  Ca = 'CA',
  Cs = 'CS',
  Da = 'DA',
  De = 'DE',
  El = 'EL',
  En = 'EN',
  Es = 'ES',
  EsCo = 'ES_CO',
  Et = 'ET',
  Fa = 'FA',
  Fi = 'FI',
  Fr = 'FR',
  Hi = 'HI',
  Hu = 'HU',
  Hy = 'HY',
  Id = 'ID',
  Is = 'IS',
  It = 'IT',
  Ja = 'JA',
  Ko = 'KO',
  Lt = 'LT',
  Mn = 'MN',
  Nb = 'NB',
  Nl = 'NL',
  Pl = 'PL',
  Pt = 'PT',
  PtBr = 'PT_BR',
  Ro = 'RO',
  Ru = 'RU',
  Sk = 'SK',
  Sl = 'SL',
  Sq = 'SQ',
  Sr = 'SR',
  Sv = 'SV',
  Sw = 'SW',
  Ta = 'TA',
  Th = 'TH',
  Tr = 'TR',
  Uk = 'UK',
  Vi = 'VI',
  ZhHans = 'ZH_HANS',
  ZhHant = 'ZH_HANT',
}

export type IAddress = INode & {
  __typename?: 'Address'
  id: Scalars['ID']
  firstName: Scalars['String']
  lastName: Scalars['String']
  companyName: Scalars['String']
  streetAddress1: Scalars['String']
  streetAddress2: Scalars['String']
  city: Scalars['String']
  cityArea: Scalars['String']
  postalCode: Scalars['String']
  country: ICountryDisplay
  countryArea: Scalars['String']
  phone?: Maybe<Scalars['String']>
  isDefaultShippingAddress?: Maybe<Scalars['Boolean']>
  isDefaultBillingAddress?: Maybe<Scalars['Boolean']>
}

export type IWarehouseCountableConnection = {
  __typename?: 'WarehouseCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IWarehouseCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IWarehouseCountableEdge = {
  __typename?: 'WarehouseCountableEdge'
  node: IWarehouse
  cursor: Scalars['String']
}

export type IWarehouseFilterInput = {
  search?: Maybe<Scalars['String']>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type IWarehouseSortingInput = {
  direction: IOrderDirection
  field: IWarehouseSortField
}

export enum IWarehouseSortField {
  Name = 'NAME',
}

export type ITranslatableItemConnection = {
  __typename?: 'TranslatableItemConnection'
  pageInfo: IPageInfo
  edges: Array<ITranslatableItemEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type ITranslatableItemEdge = {
  __typename?: 'TranslatableItemEdge'
  node: ITranslatableItem
  cursor: Scalars['String']
}

export type ITranslatableItem =
  | IProductTranslatableContent
  | ICollectionTranslatableContent
  | ICategoryTranslatableContent
  | IAttributeTranslatableContent
  | IAttributeValueTranslatableContent
  | IProductVariantTranslatableContent
  | IPageTranslatableContent
  | IShippingMethodTranslatableContent
  | ISaleTranslatableContent
  | IVoucherTranslatableContent
  | IMenuItemTranslatableContent

export type IProductTranslatableContent = INode & {
  __typename?: 'ProductTranslatableContent'
  id: Scalars['ID']
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  name: Scalars['String']
  description: Scalars['String']
  descriptionJson: Scalars['JSONString']
  translation?: Maybe<IProductTranslation>
  product?: Maybe<IProduct>
}

export type IProductTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IProductTranslation = INode & {
  __typename?: 'ProductTranslation'
  id: Scalars['ID']
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  name: Scalars['String']
  description: Scalars['String']
  descriptionJson: Scalars['JSONString']
  language: ILanguageDisplay
}

export type IProduct = INode &
  IObjectWithMetadata & {
    __typename?: 'Product'
    id: Scalars['ID']
    seoTitle?: Maybe<Scalars['String']>
    seoDescription?: Maybe<Scalars['String']>
    name: Scalars['String']
    description: Scalars['String']
    descriptionJson: Scalars['JSONString']
    publicationDate?: Maybe<Scalars['Date']>
    isPublished: Scalars['Boolean']
    productType: IProductType
    slug: Scalars['String']
    category?: Maybe<ICategory>
    updatedAt?: Maybe<Scalars['DateTime']>
    chargeTaxes: Scalars['Boolean']
    weight?: Maybe<IWeight>
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    /** @deprecated This field will be removed after 2020-07-31. */
    url: Scalars['String']
    thumbnail?: Maybe<IImage>
    pricing?: Maybe<IProductPricingInfo>
    isAvailable?: Maybe<Scalars['Boolean']>
    basePrice?: Maybe<IMoney>
    minimalVariantPrice?: Maybe<IMoney>
    taxType?: Maybe<ITaxType>
    attributes: Array<ISelectedAttribute>
    purchaseCost?: Maybe<IMoneyRange>
    margin?: Maybe<IMargin>
    imageById?: Maybe<IProductImage>
    variants?: Maybe<Array<Maybe<IProductVariant>>>
    images?: Maybe<Array<Maybe<IProductImage>>>
    collections?: Maybe<Array<Maybe<ICollection>>>
    translation?: Maybe<IProductTranslation>
  }

export type IProductThumbnailArgs = {
  size?: Maybe<Scalars['Int']>
}

export type IProductImageByIdArgs = {
  id?: Maybe<Scalars['ID']>
}

export type IProductTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IProductType = INode &
  IObjectWithMetadata & {
    __typename?: 'ProductType'
    id: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    hasVariants: Scalars['Boolean']
    isShippingRequired: Scalars['Boolean']
    isDigital: Scalars['Boolean']
    weight?: Maybe<IWeight>
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    products?: Maybe<IProductCountableConnection>
    taxRate?: Maybe<ITaxRateType>
    taxType?: Maybe<ITaxType>
    variantAttributes?: Maybe<Array<Maybe<IAttribute>>>
    productAttributes?: Maybe<Array<Maybe<IAttribute>>>
    availableAttributes?: Maybe<IAttributeCountableConnection>
  }

export type IProductTypeProductsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IProductTypeAvailableAttributesArgs = {
  filter?: Maybe<IAttributeFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IProductCountableConnection = {
  __typename?: 'ProductCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IProductCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IProductCountableEdge = {
  __typename?: 'ProductCountableEdge'
  node: IProduct
  cursor: Scalars['String']
}

export type ITaxType = {
  __typename?: 'TaxType'
  description?: Maybe<Scalars['String']>
  taxCode?: Maybe<Scalars['String']>
}

export type IAttribute = INode &
  IObjectWithMetadata & {
    __typename?: 'Attribute'
    id: Scalars['ID']
    productTypes: IProductTypeCountableConnection
    productVariantTypes: IProductTypeCountableConnection
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    inputType?: Maybe<IAttributeInputTypeEnum>
    name?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    values?: Maybe<Array<Maybe<IAttributeValue>>>
    valueRequired: Scalars['Boolean']
    visibleInStorefront: Scalars['Boolean']
    filterableInStorefront: Scalars['Boolean']
    filterableInDashboard: Scalars['Boolean']
    availableInGrid: Scalars['Boolean']
    translation?: Maybe<IAttributeTranslation>
    storefrontSearchPosition: Scalars['Int']
  }

export type IAttributeProductTypesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IAttributeProductVariantTypesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IAttributeTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IProductTypeCountableConnection = {
  __typename?: 'ProductTypeCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IProductTypeCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IProductTypeCountableEdge = {
  __typename?: 'ProductTypeCountableEdge'
  node: IProductType
  cursor: Scalars['String']
}

export enum IAttributeInputTypeEnum {
  Dropdown = 'DROPDOWN',
  Multiselect = 'MULTISELECT',
}

export type IAttributeValue = INode & {
  __typename?: 'AttributeValue'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  type?: Maybe<IAttributeValueType>
  translation?: Maybe<IAttributeValueTranslation>
  inputType?: Maybe<IAttributeInputTypeEnum>
}

export type IAttributeValueTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export enum IAttributeValueType {
  Color = 'COLOR',
  Gradient = 'GRADIENT',
  Url = 'URL',
  String = 'STRING',
}

export type IAttributeValueTranslation = INode & {
  __typename?: 'AttributeValueTranslation'
  id: Scalars['ID']
  name: Scalars['String']
  language: ILanguageDisplay
}

export type IAttributeTranslation = INode & {
  __typename?: 'AttributeTranslation'
  id: Scalars['ID']
  name: Scalars['String']
  language: ILanguageDisplay
}

export type IAttributeCountableConnection = {
  __typename?: 'AttributeCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IAttributeCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IAttributeCountableEdge = {
  __typename?: 'AttributeCountableEdge'
  node: IAttribute
  cursor: Scalars['String']
}

export type IAttributeFilterInput = {
  valueRequired?: Maybe<Scalars['Boolean']>
  isVariantOnly?: Maybe<Scalars['Boolean']>
  visibleInStorefront?: Maybe<Scalars['Boolean']>
  filterableInStorefront?: Maybe<Scalars['Boolean']>
  filterableInDashboard?: Maybe<Scalars['Boolean']>
  availableInGrid?: Maybe<Scalars['Boolean']>
  search?: Maybe<Scalars['String']>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  inCollection?: Maybe<Scalars['ID']>
  inCategory?: Maybe<Scalars['ID']>
}

export type ICategory = INode &
  IObjectWithMetadata & {
    __typename?: 'Category'
    seoTitle?: Maybe<Scalars['String']>
    seoDescription?: Maybe<Scalars['String']>
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    descriptionJson: Scalars['JSONString']
    slug: Scalars['String']
    parent?: Maybe<ICategory>
    level: Scalars['Int']
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    ancestors?: Maybe<ICategoryCountableConnection>
    products?: Maybe<IProductCountableConnection>
    /** @deprecated This field will be removed after 2020-07-31. */
    url?: Maybe<Scalars['String']>
    children?: Maybe<ICategoryCountableConnection>
    backgroundImage?: Maybe<IImage>
    translation?: Maybe<ICategoryTranslation>
  }

export type ICategoryAncestorsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type ICategoryProductsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type ICategoryChildrenArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type ICategoryBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>
}

export type ICategoryTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type ICategoryCountableConnection = {
  __typename?: 'CategoryCountableConnection'
  pageInfo: IPageInfo
  edges: Array<ICategoryCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type ICategoryCountableEdge = {
  __typename?: 'CategoryCountableEdge'
  node: ICategory
  cursor: Scalars['String']
}

export type IImage = {
  __typename?: 'Image'
  url: Scalars['String']
  alt?: Maybe<Scalars['String']>
}

export type ICategoryTranslation = INode & {
  __typename?: 'CategoryTranslation'
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  descriptionJson: Scalars['JSONString']
  language: ILanguageDisplay
}

export type IProductPricingInfo = {
  __typename?: 'ProductPricingInfo'
  onSale?: Maybe<Scalars['Boolean']>
  discount?: Maybe<ITaxedMoney>
  discountLocalCurrency?: Maybe<ITaxedMoney>
  priceRange?: Maybe<ITaxedMoneyRange>
  priceRangeUndiscounted?: Maybe<ITaxedMoneyRange>
  priceRangeLocalCurrency?: Maybe<ITaxedMoneyRange>
}

export type ITaxedMoney = {
  __typename?: 'TaxedMoney'
  currency: Scalars['String']
  gross: IMoney
  net: IMoney
  tax: IMoney
}

export type ITaxedMoneyRange = {
  __typename?: 'TaxedMoneyRange'
  start?: Maybe<ITaxedMoney>
  stop?: Maybe<ITaxedMoney>
}

export type ISelectedAttribute = {
  __typename?: 'SelectedAttribute'
  attribute: IAttribute
  values: Array<Maybe<IAttributeValue>>
}

export type IMargin = {
  __typename?: 'Margin'
  start?: Maybe<Scalars['Int']>
  stop?: Maybe<Scalars['Int']>
}

export type IProductImage = INode & {
  __typename?: 'ProductImage'
  id: Scalars['ID']
  sortOrder?: Maybe<Scalars['Int']>
  alt: Scalars['String']
  url: Scalars['String']
}

export type IProductImageUrlArgs = {
  size?: Maybe<Scalars['Int']>
}

export type IProductVariant = INode &
  IObjectWithMetadata & {
    __typename?: 'ProductVariant'
    id: Scalars['ID']
    name: Scalars['String']
    sku: Scalars['String']
    product: IProduct
    trackInventory: Scalars['Boolean']
    weight?: Maybe<IWeight>
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the stock field instead. This field will be removed after 2020-07-31. */
    quantity: Scalars['Int']
    /** @deprecated Use the stock field instead. This field will be removed after 2020-07-31. */
    quantityAllocated?: Maybe<Scalars['Int']>
    /** @deprecated Use the quantityAvailable field instead. This field will be removed after 2020-07-31. */
    stockQuantity: Scalars['Int']
    priceOverride?: Maybe<IMoney>
    pricing?: Maybe<IVariantPricingInfo>
    /** @deprecated Use the stock field instead. This field will be removed after 2020-07-31. */
    isAvailable?: Maybe<Scalars['Boolean']>
    attributes: Array<ISelectedAttribute>
    costPrice?: Maybe<IMoney>
    margin?: Maybe<Scalars['Int']>
    quantityOrdered?: Maybe<Scalars['Int']>
    revenue?: Maybe<ITaxedMoney>
    images?: Maybe<Array<Maybe<IProductImage>>>
    translation?: Maybe<IProductVariantTranslation>
    digitalContent?: Maybe<IDigitalContent>
    stocks?: Maybe<Array<Maybe<IStock>>>
    quantityAvailable: Scalars['Int']
  }

export type IProductVariantRevenueArgs = {
  period?: Maybe<IReportingPeriod>
}

export type IProductVariantTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IProductVariantStocksArgs = {
  countryCode?: Maybe<ICountryCode>
}

export type IProductVariantQuantityAvailableArgs = {
  countryCode?: Maybe<ICountryCode>
}

export type IVariantPricingInfo = {
  __typename?: 'VariantPricingInfo'
  onSale?: Maybe<Scalars['Boolean']>
  discount?: Maybe<ITaxedMoney>
  discountLocalCurrency?: Maybe<ITaxedMoney>
  price?: Maybe<ITaxedMoney>
  priceUndiscounted?: Maybe<ITaxedMoney>
  priceLocalCurrency?: Maybe<ITaxedMoney>
}

export enum IReportingPeriod {
  Today = 'TODAY',
  ThisMonth = 'THIS_MONTH',
}

export type IProductVariantTranslation = INode & {
  __typename?: 'ProductVariantTranslation'
  id: Scalars['ID']
  name: Scalars['String']
  language: ILanguageDisplay
}

export type IDigitalContent = INode &
  IObjectWithMetadata & {
    __typename?: 'DigitalContent'
    useDefaultSettings: Scalars['Boolean']
    automaticFulfillment: Scalars['Boolean']
    productVariant: IProductVariant
    contentFile: Scalars['String']
    maxDownloads?: Maybe<Scalars['Int']>
    urlValidDays?: Maybe<Scalars['Int']>
    urls?: Maybe<Array<Maybe<IDigitalContentUrl>>>
    id: Scalars['ID']
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
  }

export type IDigitalContentUrl = INode & {
  __typename?: 'DigitalContentUrl'
  token: Scalars['UUID']
  content: IDigitalContent
  created: Scalars['DateTime']
  downloadNum: Scalars['Int']
  id: Scalars['ID']
  url?: Maybe<Scalars['String']>
}

export type IStock = INode & {
  __typename?: 'Stock'
  warehouse: IWarehouse
  productVariant: IProductVariant
  quantity: Scalars['Int']
  id: Scalars['ID']
  quantityAllocated: Scalars['Int']
}

export enum ICountryCode {
  Af = 'AF',
  Ax = 'AX',
  Al = 'AL',
  Dz = 'DZ',
  As = 'AS',
  Ad = 'AD',
  Ao = 'AO',
  Ai = 'AI',
  Aq = 'AQ',
  Ag = 'AG',
  Ar = 'AR',
  Am = 'AM',
  Aw = 'AW',
  Au = 'AU',
  At = 'AT',
  Az = 'AZ',
  Bs = 'BS',
  Bh = 'BH',
  Bd = 'BD',
  Bb = 'BB',
  By = 'BY',
  Be = 'BE',
  Bz = 'BZ',
  Bj = 'BJ',
  Bm = 'BM',
  Bt = 'BT',
  Bo = 'BO',
  Bq = 'BQ',
  Ba = 'BA',
  Bw = 'BW',
  Bv = 'BV',
  Br = 'BR',
  Io = 'IO',
  Bn = 'BN',
  Bg = 'BG',
  Bf = 'BF',
  Bi = 'BI',
  Cv = 'CV',
  Kh = 'KH',
  Cm = 'CM',
  Ca = 'CA',
  Ky = 'KY',
  Cf = 'CF',
  Td = 'TD',
  Cl = 'CL',
  Cn = 'CN',
  Cx = 'CX',
  Cc = 'CC',
  Co = 'CO',
  Km = 'KM',
  Cg = 'CG',
  Cd = 'CD',
  Ck = 'CK',
  Cr = 'CR',
  Ci = 'CI',
  Hr = 'HR',
  Cu = 'CU',
  Cw = 'CW',
  Cy = 'CY',
  Cz = 'CZ',
  Dk = 'DK',
  Dj = 'DJ',
  Dm = 'DM',
  Do = 'DO',
  Ec = 'EC',
  Eg = 'EG',
  Sv = 'SV',
  Gq = 'GQ',
  Er = 'ER',
  Ee = 'EE',
  Sz = 'SZ',
  Et = 'ET',
  Eu = 'EU',
  Fk = 'FK',
  Fo = 'FO',
  Fj = 'FJ',
  Fi = 'FI',
  Fr = 'FR',
  Gf = 'GF',
  Pf = 'PF',
  Tf = 'TF',
  Ga = 'GA',
  Gm = 'GM',
  Ge = 'GE',
  De = 'DE',
  Gh = 'GH',
  Gi = 'GI',
  Gr = 'GR',
  Gl = 'GL',
  Gd = 'GD',
  Gp = 'GP',
  Gu = 'GU',
  Gt = 'GT',
  Gg = 'GG',
  Gn = 'GN',
  Gw = 'GW',
  Gy = 'GY',
  Ht = 'HT',
  Hm = 'HM',
  Va = 'VA',
  Hn = 'HN',
  Hk = 'HK',
  Hu = 'HU',
  Is = 'IS',
  In = 'IN',
  Id = 'ID',
  Ir = 'IR',
  Iq = 'IQ',
  Ie = 'IE',
  Im = 'IM',
  Il = 'IL',
  It = 'IT',
  Jm = 'JM',
  Jp = 'JP',
  Je = 'JE',
  Jo = 'JO',
  Kz = 'KZ',
  Ke = 'KE',
  Ki = 'KI',
  Kw = 'KW',
  Kg = 'KG',
  La = 'LA',
  Lv = 'LV',
  Lb = 'LB',
  Ls = 'LS',
  Lr = 'LR',
  Ly = 'LY',
  Li = 'LI',
  Lt = 'LT',
  Lu = 'LU',
  Mo = 'MO',
  Mg = 'MG',
  Mw = 'MW',
  My = 'MY',
  Mv = 'MV',
  Ml = 'ML',
  Mt = 'MT',
  Mh = 'MH',
  Mq = 'MQ',
  Mr = 'MR',
  Mu = 'MU',
  Yt = 'YT',
  Mx = 'MX',
  Fm = 'FM',
  Md = 'MD',
  Mc = 'MC',
  Mn = 'MN',
  Me = 'ME',
  Ms = 'MS',
  Ma = 'MA',
  Mz = 'MZ',
  Mm = 'MM',
  Na = 'NA',
  Nr = 'NR',
  Np = 'NP',
  Nl = 'NL',
  Nc = 'NC',
  Nz = 'NZ',
  Ni = 'NI',
  Ne = 'NE',
  Ng = 'NG',
  Nu = 'NU',
  Nf = 'NF',
  Kp = 'KP',
  Mk = 'MK',
  Mp = 'MP',
  No = 'NO',
  Om = 'OM',
  Pk = 'PK',
  Pw = 'PW',
  Ps = 'PS',
  Pa = 'PA',
  Pg = 'PG',
  Py = 'PY',
  Pe = 'PE',
  Ph = 'PH',
  Pn = 'PN',
  Pl = 'PL',
  Pt = 'PT',
  Pr = 'PR',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Ru = 'RU',
  Rw = 'RW',
  Bl = 'BL',
  Sh = 'SH',
  Kn = 'KN',
  Lc = 'LC',
  Mf = 'MF',
  Pm = 'PM',
  Vc = 'VC',
  Ws = 'WS',
  Sm = 'SM',
  St = 'ST',
  Sa = 'SA',
  Sn = 'SN',
  Rs = 'RS',
  Sc = 'SC',
  Sl = 'SL',
  Sg = 'SG',
  Sx = 'SX',
  Sk = 'SK',
  Si = 'SI',
  Sb = 'SB',
  So = 'SO',
  Za = 'ZA',
  Gs = 'GS',
  Kr = 'KR',
  Ss = 'SS',
  Es = 'ES',
  Lk = 'LK',
  Sd = 'SD',
  Sr = 'SR',
  Sj = 'SJ',
  Se = 'SE',
  Ch = 'CH',
  Sy = 'SY',
  Tw = 'TW',
  Tj = 'TJ',
  Tz = 'TZ',
  Th = 'TH',
  Tl = 'TL',
  Tg = 'TG',
  Tk = 'TK',
  To = 'TO',
  Tt = 'TT',
  Tn = 'TN',
  Tr = 'TR',
  Tm = 'TM',
  Tc = 'TC',
  Tv = 'TV',
  Ug = 'UG',
  Ua = 'UA',
  Ae = 'AE',
  Gb = 'GB',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Vu = 'VU',
  Ve = 'VE',
  Vn = 'VN',
  Vg = 'VG',
  Vi = 'VI',
  Wf = 'WF',
  Eh = 'EH',
  Ye = 'YE',
  Zm = 'ZM',
  Zw = 'ZW',
}

export type ICollection = INode &
  IObjectWithMetadata & {
    __typename?: 'Collection'
    seoTitle?: Maybe<Scalars['String']>
    seoDescription?: Maybe<Scalars['String']>
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    descriptionJson: Scalars['JSONString']
    publicationDate?: Maybe<Scalars['Date']>
    isPublished: Scalars['Boolean']
    slug: Scalars['String']
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    products?: Maybe<IProductCountableConnection>
    backgroundImage?: Maybe<IImage>
    translation?: Maybe<ICollectionTranslation>
  }

export type ICollectionProductsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type ICollectionBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>
}

export type ICollectionTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type ICollectionTranslation = INode & {
  __typename?: 'CollectionTranslation'
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  descriptionJson: Scalars['JSONString']
  language: ILanguageDisplay
}

export type ICollectionTranslatableContent = INode & {
  __typename?: 'CollectionTranslatableContent'
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  descriptionJson: Scalars['JSONString']
  translation?: Maybe<ICollectionTranslation>
  collection?: Maybe<ICollection>
}

export type ICollectionTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type ICategoryTranslatableContent = INode & {
  __typename?: 'CategoryTranslatableContent'
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  descriptionJson: Scalars['JSONString']
  translation?: Maybe<ICategoryTranslation>
  category?: Maybe<ICategory>
}

export type ICategoryTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IAttributeTranslatableContent = INode & {
  __typename?: 'AttributeTranslatableContent'
  id: Scalars['ID']
  name: Scalars['String']
  translation?: Maybe<IAttributeTranslation>
  attribute?: Maybe<IAttribute>
}

export type IAttributeTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IAttributeValueTranslatableContent = INode & {
  __typename?: 'AttributeValueTranslatableContent'
  id: Scalars['ID']
  name: Scalars['String']
  translation?: Maybe<IAttributeValueTranslation>
  attributeValue?: Maybe<IAttributeValue>
}

export type IAttributeValueTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IProductVariantTranslatableContent = INode & {
  __typename?: 'ProductVariantTranslatableContent'
  id: Scalars['ID']
  name: Scalars['String']
  translation?: Maybe<IProductVariantTranslation>
  productVariant?: Maybe<IProductVariant>
}

export type IProductVariantTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IPageTranslatableContent = INode & {
  __typename?: 'PageTranslatableContent'
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title: Scalars['String']
  content: Scalars['String']
  contentJson: Scalars['JSONString']
  translation?: Maybe<IPageTranslation>
  page?: Maybe<IPage>
}

export type IPageTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IPageTranslation = INode & {
  __typename?: 'PageTranslation'
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title: Scalars['String']
  content: Scalars['String']
  contentJson: Scalars['JSONString']
  language: ILanguageDisplay
}

export type IPage = INode & {
  __typename?: 'Page'
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title: Scalars['String']
  content: Scalars['String']
  contentJson: Scalars['JSONString']
  publicationDate?: Maybe<Scalars['Date']>
  isPublished: Scalars['Boolean']
  slug: Scalars['String']
  created: Scalars['DateTime']
  translation?: Maybe<IPageTranslation>
}

export type IPageTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IShippingMethodTranslatableContent = INode & {
  __typename?: 'ShippingMethodTranslatableContent'
  id: Scalars['ID']
  name: Scalars['String']
  translation?: Maybe<IShippingMethodTranslation>
  shippingMethod?: Maybe<IShippingMethod>
}

export type IShippingMethodTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type ISaleTranslatableContent = INode & {
  __typename?: 'SaleTranslatableContent'
  id: Scalars['ID']
  name: Scalars['String']
  translation?: Maybe<ISaleTranslation>
  sale?: Maybe<ISale>
}

export type ISaleTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type ISaleTranslation = INode & {
  __typename?: 'SaleTranslation'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  language: ILanguageDisplay
}

export type ISale = INode & {
  __typename?: 'Sale'
  id: Scalars['ID']
  name: Scalars['String']
  type: ISaleType
  value: Scalars['Float']
  startDate: Scalars['DateTime']
  endDate?: Maybe<Scalars['DateTime']>
  categories?: Maybe<ICategoryCountableConnection>
  collections?: Maybe<ICollectionCountableConnection>
  products?: Maybe<IProductCountableConnection>
  translation?: Maybe<ISaleTranslation>
}

export type ISaleCategoriesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type ISaleCollectionsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type ISaleProductsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type ISaleTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export enum ISaleType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
}

export type ICollectionCountableConnection = {
  __typename?: 'CollectionCountableConnection'
  pageInfo: IPageInfo
  edges: Array<ICollectionCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type ICollectionCountableEdge = {
  __typename?: 'CollectionCountableEdge'
  node: ICollection
  cursor: Scalars['String']
}

export type IVoucherTranslatableContent = INode & {
  __typename?: 'VoucherTranslatableContent'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  translation?: Maybe<IVoucherTranslation>
  voucher?: Maybe<IVoucher>
}

export type IVoucherTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IVoucherTranslation = INode & {
  __typename?: 'VoucherTranslation'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  language: ILanguageDisplay
}

export type IVoucher = INode & {
  __typename?: 'Voucher'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  type: IVoucherTypeEnum
  code: Scalars['String']
  usageLimit?: Maybe<Scalars['Int']>
  used: Scalars['Int']
  startDate: Scalars['DateTime']
  endDate?: Maybe<Scalars['DateTime']>
  applyOncePerOrder: Scalars['Boolean']
  applyOncePerCustomer: Scalars['Boolean']
  discountValueType: IDiscountValueTypeEnum
  discountValue: Scalars['Float']
  minSpent?: Maybe<IMoney>
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']>
  categories?: Maybe<ICategoryCountableConnection>
  collections?: Maybe<ICollectionCountableConnection>
  products?: Maybe<IProductCountableConnection>
  countries?: Maybe<Array<Maybe<ICountryDisplay>>>
  translation?: Maybe<IVoucherTranslation>
}

export type IVoucherCategoriesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IVoucherCollectionsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IVoucherProductsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IVoucherTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export enum IVoucherTypeEnum {
  Shipping = 'SHIPPING',
  EntireOrder = 'ENTIRE_ORDER',
  SpecificProduct = 'SPECIFIC_PRODUCT',
}

export enum IDiscountValueTypeEnum {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
}

export type IMenuItemTranslatableContent = INode & {
  __typename?: 'MenuItemTranslatableContent'
  id: Scalars['ID']
  name: Scalars['String']
  translation?: Maybe<IMenuItemTranslation>
  menuItem?: Maybe<IMenuItem>
}

export type IMenuItemTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IMenuItemTranslation = INode & {
  __typename?: 'MenuItemTranslation'
  id: Scalars['ID']
  name: Scalars['String']
  language: ILanguageDisplay
}

export type IMenuItem = INode & {
  __typename?: 'MenuItem'
  id: Scalars['ID']
  name: Scalars['String']
  menu: IMenu
  parent?: Maybe<IMenuItem>
  category?: Maybe<ICategory>
  collection?: Maybe<ICollection>
  page?: Maybe<IPage>
  level: Scalars['Int']
  children?: Maybe<Array<Maybe<IMenuItem>>>
  url?: Maybe<Scalars['String']>
  translation?: Maybe<IMenuItemTranslation>
}

export type IMenuItemTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IMenu = INode & {
  __typename?: 'Menu'
  id: Scalars['ID']
  name: Scalars['String']
  items?: Maybe<Array<Maybe<IMenuItem>>>
}

export enum ITranslatableKinds {
  Attribute = 'ATTRIBUTE',
  AttributeValue = 'ATTRIBUTE_VALUE',
  Category = 'CATEGORY',
  Collection = 'COLLECTION',
  MenuItem = 'MENU_ITEM',
  Page = 'PAGE',
  Product = 'PRODUCT',
  Sale = 'SALE',
  ShippingMethod = 'SHIPPING_METHOD',
  Variant = 'VARIANT',
  Voucher = 'VOUCHER',
}

export type IStockCountableConnection = {
  __typename?: 'StockCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IStockCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IStockCountableEdge = {
  __typename?: 'StockCountableEdge'
  node: IStock
  cursor: Scalars['String']
}

export type IStockFilterInput = {
  quantity?: Maybe<Scalars['Float']>
  search?: Maybe<Scalars['String']>
}

export type IShop = {
  __typename?: 'Shop'
  availablePaymentGateways: Array<IPaymentGateway>
  geolocalization?: Maybe<IGeolocalization>
  authorizationKeys: Array<Maybe<IAuthorizationKey>>
  countries: Array<ICountryDisplay>
  currencies: Array<Maybe<Scalars['String']>>
  defaultCurrency: Scalars['String']
  defaultCountry?: Maybe<ICountryDisplay>
  defaultMailSenderName?: Maybe<Scalars['String']>
  defaultMailSenderAddress?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  domain: IDomain
  homepageCollection?: Maybe<ICollection>
  languages: Array<Maybe<ILanguageDisplay>>
  name: Scalars['String']
  navigation?: Maybe<INavigation>
  permissions: Array<Maybe<IPermission>>
  phonePrefixes: Array<Maybe<Scalars['String']>>
  headerText?: Maybe<Scalars['String']>
  includeTaxesInPrices: Scalars['Boolean']
  displayGrossPrices: Scalars['Boolean']
  chargeTaxesOnShipping: Scalars['Boolean']
  trackInventoryByDefault?: Maybe<Scalars['Boolean']>
  defaultWeightUnit?: Maybe<IWeightUnitsEnum>
  translation?: Maybe<IShopTranslation>
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>
  companyAddress?: Maybe<IAddress>
  customerSetPasswordUrl?: Maybe<Scalars['String']>
  staffNotificationRecipients?: Maybe<Array<Maybe<IStaffNotificationRecipient>>>
}

export type IShopCountriesArgs = {
  languageCode?: Maybe<ILanguageCodeEnum>
}

export type IShopTranslationArgs = {
  languageCode: ILanguageCodeEnum
}

export type IPaymentGateway = {
  __typename?: 'PaymentGateway'
  name: Scalars['String']
  id: Scalars['ID']
  config: Array<IGatewayConfigLine>
}

export type IGatewayConfigLine = {
  __typename?: 'GatewayConfigLine'
  field: Scalars['String']
  value?: Maybe<Scalars['String']>
}

export type IGeolocalization = {
  __typename?: 'Geolocalization'
  country?: Maybe<ICountryDisplay>
}

export type IAuthorizationKey = {
  __typename?: 'AuthorizationKey'
  name: IAuthorizationKeyType
  key: Scalars['String']
}

export enum IAuthorizationKeyType {
  Facebook = 'FACEBOOK',
  GoogleOauth2 = 'GOOGLE_OAUTH2',
}

export type IDomain = {
  __typename?: 'Domain'
  host: Scalars['String']
  sslEnabled: Scalars['Boolean']
  url: Scalars['String']
}

export type INavigation = {
  __typename?: 'Navigation'
  main?: Maybe<IMenu>
  secondary?: Maybe<IMenu>
}

export enum IWeightUnitsEnum {
  Kg = 'KG',
  Lb = 'LB',
  Oz = 'OZ',
  G = 'G',
}

export type IShopTranslation = INode & {
  __typename?: 'ShopTranslation'
  id: Scalars['ID']
  headerText: Scalars['String']
  description: Scalars['String']
  language: ILanguageDisplay
}

export type IStaffNotificationRecipient = INode & {
  __typename?: 'StaffNotificationRecipient'
  user?: Maybe<IUser>
  active?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  email?: Maybe<Scalars['String']>
}

export type IUser = INode &
  IObjectWithMetadata & {
    __typename?: 'User'
    id: Scalars['ID']
    lastLogin?: Maybe<Scalars['DateTime']>
    email: Scalars['String']
    firstName: Scalars['String']
    lastName: Scalars['String']
    isStaff: Scalars['Boolean']
    isActive: Scalars['Boolean']
    note?: Maybe<Scalars['String']>
    dateJoined: Scalars['DateTime']
    defaultShippingAddress?: Maybe<IAddress>
    defaultBillingAddress?: Maybe<IAddress>
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    addresses?: Maybe<Array<Maybe<IAddress>>>
    checkout?: Maybe<ICheckout>
    giftCards?: Maybe<IGiftCardCountableConnection>
    orders?: Maybe<IOrderCountableConnection>
    /** @deprecated Will be removed in Saleor 2.11.Use the `userPermissions` instead. */
    permissions?: Maybe<Array<Maybe<IPermission>>>
    userPermissions?: Maybe<Array<Maybe<IUserPermission>>>
    permissionGroups?: Maybe<Array<Maybe<IGroup>>>
    editableGroups?: Maybe<Array<Maybe<IGroup>>>
    avatar?: Maybe<IImage>
    events?: Maybe<Array<Maybe<ICustomerEvent>>>
    storedPaymentSources?: Maybe<Array<Maybe<IPaymentSource>>>
  }

export type IUserGiftCardsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IUserOrdersArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IUserAvatarArgs = {
  size?: Maybe<Scalars['Int']>
}

export type ICheckout = INode &
  IObjectWithMetadata & {
    __typename?: 'Checkout'
    created: Scalars['DateTime']
    lastChange: Scalars['DateTime']
    user?: Maybe<IUser>
    token: Scalars['UUID']
    quantity: Scalars['Int']
    billingAddress?: Maybe<IAddress>
    shippingAddress?: Maybe<IAddress>
    shippingMethod?: Maybe<IShippingMethod>
    note: Scalars['String']
    discount?: Maybe<IMoney>
    discountName?: Maybe<Scalars['String']>
    translatedDiscountName?: Maybe<Scalars['String']>
    voucherCode?: Maybe<Scalars['String']>
    giftCards?: Maybe<Array<Maybe<IGiftCard>>>
    id: Scalars['ID']
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    availableShippingMethods: Array<Maybe<IShippingMethod>>
    availablePaymentGateways: Array<IPaymentGateway>
    email: Scalars['String']
    isShippingRequired: Scalars['Boolean']
    lines?: Maybe<Array<Maybe<ICheckoutLine>>>
    shippingPrice?: Maybe<ITaxedMoney>
    subtotalPrice?: Maybe<ITaxedMoney>
    totalPrice?: Maybe<ITaxedMoney>
  }

export type IGiftCard = INode & {
  __typename?: 'GiftCard'
  code?: Maybe<Scalars['String']>
  user?: Maybe<IUser>
  created: Scalars['DateTime']
  startDate: Scalars['Date']
  endDate?: Maybe<Scalars['Date']>
  lastUsedOn?: Maybe<Scalars['DateTime']>
  isActive: Scalars['Boolean']
  initialBalance?: Maybe<IMoney>
  currentBalance?: Maybe<IMoney>
  id: Scalars['ID']
  displayCode?: Maybe<Scalars['String']>
}

export type ICheckoutLine = INode & {
  __typename?: 'CheckoutLine'
  id: Scalars['ID']
  variant: IProductVariant
  quantity: Scalars['Int']
  totalPrice?: Maybe<ITaxedMoney>
  requiresShipping?: Maybe<Scalars['Boolean']>
}

export type IGiftCardCountableConnection = {
  __typename?: 'GiftCardCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IGiftCardCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IGiftCardCountableEdge = {
  __typename?: 'GiftCardCountableEdge'
  node: IGiftCard
  cursor: Scalars['String']
}

export type IOrderCountableConnection = {
  __typename?: 'OrderCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IOrderCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IOrderCountableEdge = {
  __typename?: 'OrderCountableEdge'
  node: IOrder
  cursor: Scalars['String']
}

export type IOrder = INode &
  IObjectWithMetadata & {
    __typename?: 'Order'
    id: Scalars['ID']
    created: Scalars['DateTime']
    status: IOrderStatus
    user?: Maybe<IUser>
    languageCode: Scalars['String']
    trackingClientId: Scalars['String']
    billingAddress?: Maybe<IAddress>
    shippingAddress?: Maybe<IAddress>
    shippingMethod?: Maybe<IShippingMethod>
    shippingMethodName?: Maybe<Scalars['String']>
    shippingPrice?: Maybe<ITaxedMoney>
    token: Scalars['String']
    voucher?: Maybe<IVoucher>
    giftCards?: Maybe<Array<Maybe<IGiftCard>>>
    discount?: Maybe<IMoney>
    discountName?: Maybe<Scalars['String']>
    translatedDiscountName?: Maybe<Scalars['String']>
    displayGrossPrices: Scalars['Boolean']
    customerNote: Scalars['String']
    weight?: Maybe<IWeight>
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    fulfillments: Array<Maybe<IFulfillment>>
    lines: Array<Maybe<IOrderLine>>
    actions: Array<Maybe<IOrderAction>>
    availableShippingMethods?: Maybe<Array<Maybe<IShippingMethod>>>
    number?: Maybe<Scalars['String']>
    isPaid?: Maybe<Scalars['Boolean']>
    paymentStatus?: Maybe<IPaymentChargeStatusEnum>
    paymentStatusDisplay?: Maybe<Scalars['String']>
    payments?: Maybe<Array<Maybe<IPayment>>>
    total?: Maybe<ITaxedMoney>
    subtotal?: Maybe<ITaxedMoney>
    statusDisplay?: Maybe<Scalars['String']>
    canFinalize: Scalars['Boolean']
    totalAuthorized?: Maybe<IMoney>
    totalCaptured?: Maybe<IMoney>
    events?: Maybe<Array<Maybe<IOrderEvent>>>
    totalBalance: IMoney
    userEmail?: Maybe<Scalars['String']>
    isShippingRequired: Scalars['Boolean']
  }

export enum IOrderStatus {
  Draft = 'DRAFT',
  Unfulfilled = 'UNFULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  Fulfilled = 'FULFILLED',
  Canceled = 'CANCELED',
}

export type IFulfillment = INode &
  IObjectWithMetadata & {
    __typename?: 'Fulfillment'
    id: Scalars['ID']
    fulfillmentOrder: Scalars['Int']
    status: IFulfillmentStatus
    trackingNumber: Scalars['String']
    created: Scalars['DateTime']
    privateMetadata: Array<Maybe<IMetadataItem>>
    metadata: Array<Maybe<IMetadataItem>>
    /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
    privateMeta: Array<Maybe<IMetaStore>>
    /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
    meta: Array<Maybe<IMetaStore>>
    lines?: Maybe<Array<Maybe<IFulfillmentLine>>>
    statusDisplay?: Maybe<Scalars['String']>
    warehouse?: Maybe<IWarehouse>
  }

export enum IFulfillmentStatus {
  Fulfilled = 'FULFILLED',
  Canceled = 'CANCELED',
}

export type IFulfillmentLine = INode & {
  __typename?: 'FulfillmentLine'
  id: Scalars['ID']
  quantity: Scalars['Int']
  orderLine?: Maybe<IOrderLine>
}

export type IOrderLine = INode & {
  __typename?: 'OrderLine'
  id: Scalars['ID']
  productName: Scalars['String']
  variantName: Scalars['String']
  productSku: Scalars['String']
  isShippingRequired: Scalars['Boolean']
  quantity: Scalars['Int']
  quantityFulfilled: Scalars['Int']
  taxRate: Scalars['Float']
  digitalContentUrl?: Maybe<IDigitalContentUrl>
  thumbnail?: Maybe<IImage>
  unitPrice?: Maybe<ITaxedMoney>
  variant?: Maybe<IProductVariant>
  translatedProductName: Scalars['String']
  translatedVariantName: Scalars['String']
}

export type IOrderLineThumbnailArgs = {
  size?: Maybe<Scalars['Int']>
}

export enum IOrderAction {
  Capture = 'CAPTURE',
  MarkAsPaid = 'MARK_AS_PAID',
  Refund = 'REFUND',
  Void = 'VOID',
}

export enum IPaymentChargeStatusEnum {
  NotCharged = 'NOT_CHARGED',
  PartiallyCharged = 'PARTIALLY_CHARGED',
  FullyCharged = 'FULLY_CHARGED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  FullyRefunded = 'FULLY_REFUNDED',
}

export type IPayment = INode & {
  __typename?: 'Payment'
  id: Scalars['ID']
  gateway: Scalars['String']
  isActive: Scalars['Boolean']
  created: Scalars['DateTime']
  modified: Scalars['DateTime']
  token: Scalars['String']
  checkout?: Maybe<ICheckout>
  order?: Maybe<IOrder>
  billingEmail: Scalars['String']
  customerIpAddress?: Maybe<Scalars['String']>
  extraData: Scalars['String']
  chargeStatus: IPaymentChargeStatusEnum
  actions: Array<Maybe<IOrderAction>>
  total?: Maybe<IMoney>
  capturedAmount?: Maybe<IMoney>
  billingAddress?: Maybe<IAddress>
  transactions?: Maybe<Array<Maybe<ITransaction>>>
  availableCaptureAmount?: Maybe<IMoney>
  availableRefundAmount?: Maybe<IMoney>
  creditCard?: Maybe<ICreditCard>
}

export type ITransaction = INode & {
  __typename?: 'Transaction'
  id: Scalars['ID']
  created: Scalars['DateTime']
  payment: IPayment
  token: Scalars['String']
  kind: ITransactionKind
  isSuccess: Scalars['Boolean']
  error?: Maybe<ITransactionError>
  gatewayResponse: Scalars['JSONString']
  amount?: Maybe<IMoney>
}

export enum ITransactionKind {
  Auth = 'AUTH',
  Refund = 'REFUND',
  Capture = 'CAPTURE',
  Void = 'VOID',
  Confirm = 'CONFIRM',
}

export enum ITransactionError {
  TransactionerrorIncorrectNumber = 'TRANSACTIONERROR_INCORRECT_NUMBER',
  TransactionerrorInvalidNumber = 'TRANSACTIONERROR_INVALID_NUMBER',
  TransactionerrorIncorrectCvv = 'TRANSACTIONERROR_INCORRECT_CVV',
  TransactionerrorInvalidCvv = 'TRANSACTIONERROR_INVALID_CVV',
  TransactionerrorIncorrectZip = 'TRANSACTIONERROR_INCORRECT_ZIP',
  TransactionerrorIncorrectAddress = 'TRANSACTIONERROR_INCORRECT_ADDRESS',
  TransactionerrorInvalidExpiryDate = 'TRANSACTIONERROR_INVALID_EXPIRY_DATE',
  TransactionerrorExpired = 'TRANSACTIONERROR_EXPIRED',
  TransactionerrorProcessingError = 'TRANSACTIONERROR_PROCESSING_ERROR',
  TransactionerrorDeclined = 'TRANSACTIONERROR_DECLINED',
}

export type ICreditCard = {
  __typename?: 'CreditCard'
  brand: Scalars['String']
  firstDigits: Scalars['String']
  lastDigits: Scalars['String']
  expMonth: Scalars['Int']
  expYear: Scalars['Int']
}

export type IOrderEvent = INode & {
  __typename?: 'OrderEvent'
  id: Scalars['ID']
  date?: Maybe<Scalars['DateTime']>
  type?: Maybe<IOrderEventsEnum>
  user?: Maybe<IUser>
  message?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  emailType?: Maybe<IOrderEventsEmailsEnum>
  amount?: Maybe<Scalars['Float']>
  paymentId?: Maybe<Scalars['String']>
  paymentGateway?: Maybe<Scalars['String']>
  quantity?: Maybe<Scalars['Int']>
  composedId?: Maybe<Scalars['String']>
  orderNumber?: Maybe<Scalars['String']>
  oversoldItems?: Maybe<Array<Maybe<Scalars['String']>>>
  lines?: Maybe<Array<Maybe<IOrderEventOrderLineObject>>>
  fulfilledItems?: Maybe<Array<Maybe<IFulfillmentLine>>>
  warehouse?: Maybe<IWarehouse>
}

export enum IOrderEventsEnum {
  DraftCreated = 'DRAFT_CREATED',
  DraftAddedProducts = 'DRAFT_ADDED_PRODUCTS',
  DraftRemovedProducts = 'DRAFT_REMOVED_PRODUCTS',
  Placed = 'PLACED',
  PlacedFromDraft = 'PLACED_FROM_DRAFT',
  OversoldItems = 'OVERSOLD_ITEMS',
  Canceled = 'CANCELED',
  OrderMarkedAsPaid = 'ORDER_MARKED_AS_PAID',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  UpdatedAddress = 'UPDATED_ADDRESS',
  EmailSent = 'EMAIL_SENT',
  PaymentCaptured = 'PAYMENT_CAPTURED',
  PaymentRefunded = 'PAYMENT_REFUNDED',
  PaymentVoided = 'PAYMENT_VOIDED',
  PaymentFailed = 'PAYMENT_FAILED',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentRestockedItems = 'FULFILLMENT_RESTOCKED_ITEMS',
  FulfillmentFulfilledItems = 'FULFILLMENT_FULFILLED_ITEMS',
  TrackingUpdated = 'TRACKING_UPDATED',
  NoteAdded = 'NOTE_ADDED',
  Other = 'OTHER',
}

export enum IOrderEventsEmailsEnum {
  PaymentConfirmation = 'PAYMENT_CONFIRMATION',
  ShippingConfirmation = 'SHIPPING_CONFIRMATION',
  TrackingUpdated = 'TRACKING_UPDATED',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  FulfillmentConfirmation = 'FULFILLMENT_CONFIRMATION',
  DigitalLinks = 'DIGITAL_LINKS',
}

export type IOrderEventOrderLineObject = {
  __typename?: 'OrderEventOrderLineObject'
  quantity?: Maybe<Scalars['Int']>
  orderLine?: Maybe<IOrderLine>
  itemName?: Maybe<Scalars['String']>
}

export type IUserPermission = {
  __typename?: 'UserPermission'
  code: IPermissionEnum
  name: Scalars['String']
  sourcePermissionGroups?: Maybe<Array<IGroup>>
}

export type IUserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID']
}

export type IGroup = INode & {
  __typename?: 'Group'
  id: Scalars['ID']
  name: Scalars['String']
  permissions?: Maybe<Array<Maybe<IPermission>>>
  users?: Maybe<Array<Maybe<IUser>>>
  userCanManage: Scalars['Boolean']
}

export type ICustomerEvent = INode & {
  __typename?: 'CustomerEvent'
  id: Scalars['ID']
  date?: Maybe<Scalars['DateTime']>
  type?: Maybe<ICustomerEventsEnum>
  user?: Maybe<IUser>
  message?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  order?: Maybe<IOrder>
  orderLine?: Maybe<IOrderLine>
}

export enum ICustomerEventsEnum {
  AccountCreated = 'ACCOUNT_CREATED',
  PasswordResetLinkSent = 'PASSWORD_RESET_LINK_SENT',
  PasswordReset = 'PASSWORD_RESET',
  EmailChangedRequest = 'EMAIL_CHANGED_REQUEST',
  PasswordChanged = 'PASSWORD_CHANGED',
  EmailChanged = 'EMAIL_CHANGED',
  PlacedOrder = 'PLACED_ORDER',
  NoteAddedToOrder = 'NOTE_ADDED_TO_ORDER',
  DigitalLinkDownloaded = 'DIGITAL_LINK_DOWNLOADED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  NameAssigned = 'NAME_ASSIGNED',
  EmailAssigned = 'EMAIL_ASSIGNED',
  NoteAdded = 'NOTE_ADDED',
}

export type IPaymentSource = {
  __typename?: 'PaymentSource'
  gateway: Scalars['String']
  creditCardInfo?: Maybe<ICreditCard>
}

export type IDigitalContentCountableConnection = {
  __typename?: 'DigitalContentCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IDigitalContentCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IDigitalContentCountableEdge = {
  __typename?: 'DigitalContentCountableEdge'
  node: IDigitalContent
  cursor: Scalars['String']
}

export type IAttributeSortingInput = {
  direction: IOrderDirection
  field: IAttributeSortField
}

export enum IAttributeSortField {
  Name = 'NAME',
  Slug = 'SLUG',
  ValueRequired = 'VALUE_REQUIRED',
  IsVariantOnly = 'IS_VARIANT_ONLY',
  VisibleInStorefront = 'VISIBLE_IN_STOREFRONT',
  FilterableInStorefront = 'FILTERABLE_IN_STOREFRONT',
  FilterableInDashboard = 'FILTERABLE_IN_DASHBOARD',
  StorefrontSearchPosition = 'STOREFRONT_SEARCH_POSITION',
  AvailableInGrid = 'AVAILABLE_IN_GRID',
}

export type ICategoryFilterInput = {
  search?: Maybe<Scalars['String']>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type ICategorySortingInput = {
  direction: IOrderDirection
  field: ICategorySortField
}

export enum ICategorySortField {
  Name = 'NAME',
  ProductCount = 'PRODUCT_COUNT',
  SubcategoryCount = 'SUBCATEGORY_COUNT',
}

export type ICollectionFilterInput = {
  published?: Maybe<ICollectionPublished>
  search?: Maybe<Scalars['String']>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export enum ICollectionPublished {
  Published = 'PUBLISHED',
  Hidden = 'HIDDEN',
}

export type ICollectionSortingInput = {
  direction: IOrderDirection
  field: ICollectionSortField
}

export enum ICollectionSortField {
  Name = 'NAME',
  Availability = 'AVAILABILITY',
  ProductCount = 'PRODUCT_COUNT',
}

export type IProductFilterInput = {
  isPublished?: Maybe<Scalars['Boolean']>
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  hasCategory?: Maybe<Scalars['Boolean']>
  price?: Maybe<IPriceRangeInput>
  attributes?: Maybe<Array<Maybe<IAttributeInput>>>
  stockAvailability?: Maybe<IStockAvailability>
  productType?: Maybe<Scalars['ID']>
  stocks?: Maybe<IProductStockFilterInput>
  search?: Maybe<Scalars['String']>
  minimalPrice?: Maybe<IPriceRangeInput>
  productTypes?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type IPriceRangeInput = {
  gte?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
}

export type IAttributeInput = {
  slug: Scalars['String']
  value?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<Scalars['String']>>>
}

export enum IStockAvailability {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK',
}

export type IProductStockFilterInput = {
  warehouseIds?: Maybe<Array<Scalars['ID']>>
  quantity?: Maybe<IIntRangeInput>
}

export type IIntRangeInput = {
  gte?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
}

export type IProductOrder = {
  direction: IOrderDirection
  attributeId?: Maybe<Scalars['ID']>
  field?: Maybe<IProductOrderField>
}

export enum IProductOrderField {
  Name = 'NAME',
  Price = 'PRICE',
  MinimalPrice = 'MINIMAL_PRICE',
  Date = 'DATE',
  Type = 'TYPE',
  Published = 'PUBLISHED',
}

export type IProductTypeFilterInput = {
  search?: Maybe<Scalars['String']>
  configurable?: Maybe<IProductTypeConfigurable>
  productType?: Maybe<IProductTypeEnum>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export enum IProductTypeConfigurable {
  Configurable = 'CONFIGURABLE',
  Simple = 'SIMPLE',
}

export enum IProductTypeEnum {
  Digital = 'DIGITAL',
  Shippable = 'SHIPPABLE',
}

export type IProductTypeSortingInput = {
  direction: IOrderDirection
  field: IProductTypeSortField
}

export enum IProductTypeSortField {
  Name = 'NAME',
  Digital = 'DIGITAL',
  ShippingRequired = 'SHIPPING_REQUIRED',
}

export type IProductVariantCountableConnection = {
  __typename?: 'ProductVariantCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IProductVariantCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IProductVariantCountableEdge = {
  __typename?: 'ProductVariantCountableEdge'
  node: IProductVariant
  cursor: Scalars['String']
}

export type IPaymentCountableConnection = {
  __typename?: 'PaymentCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IPaymentCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IPaymentCountableEdge = {
  __typename?: 'PaymentCountableEdge'
  node: IPayment
  cursor: Scalars['String']
}

export type IPageCountableConnection = {
  __typename?: 'PageCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IPageCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IPageCountableEdge = {
  __typename?: 'PageCountableEdge'
  node: IPage
  cursor: Scalars['String']
}

export type IPageSortingInput = {
  direction: IOrderDirection
  field: IPageSortField
}

export enum IPageSortField {
  Title = 'TITLE',
  Slug = 'SLUG',
  Visibility = 'VISIBILITY',
  CreationDate = 'CREATION_DATE',
  PublicationDate = 'PUBLICATION_DATE',
}

export type IPageFilterInput = {
  search?: Maybe<Scalars['String']>
}

export type IOrderEventCountableConnection = {
  __typename?: 'OrderEventCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IOrderEventCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IOrderEventCountableEdge = {
  __typename?: 'OrderEventCountableEdge'
  node: IOrderEvent
  cursor: Scalars['String']
}

export type IOrderSortingInput = {
  direction: IOrderDirection
  field: IOrderSortField
}

export enum IOrderSortField {
  Number = 'NUMBER',
  CreationDate = 'CREATION_DATE',
  Customer = 'CUSTOMER',
  Payment = 'PAYMENT',
  FulfillmentStatus = 'FULFILLMENT_STATUS',
  Total = 'TOTAL',
}

export type IOrderFilterInput = {
  paymentStatus?: Maybe<Array<Maybe<IPaymentChargeStatusEnum>>>
  status?: Maybe<Array<Maybe<IOrderStatusFilter>>>
  customer?: Maybe<Scalars['String']>
  created?: Maybe<IDateRangeInput>
  search?: Maybe<Scalars['String']>
}

export enum IOrderStatusFilter {
  ReadyToFulfill = 'READY_TO_FULFILL',
  ReadyToCapture = 'READY_TO_CAPTURE',
  Unfulfilled = 'UNFULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  Fulfilled = 'FULFILLED',
  Canceled = 'CANCELED',
}

export type IDateRangeInput = {
  gte?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
}

export type IOrderDraftFilterInput = {
  customer?: Maybe<Scalars['String']>
  created?: Maybe<IDateRangeInput>
  search?: Maybe<Scalars['String']>
}

export type IMenuCountableConnection = {
  __typename?: 'MenuCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IMenuCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IMenuCountableEdge = {
  __typename?: 'MenuCountableEdge'
  node: IMenu
  cursor: Scalars['String']
}

export type IMenuSortingInput = {
  direction: IOrderDirection
  field: IMenuSortField
}

export enum IMenuSortField {
  Name = 'NAME',
  ItemsCount = 'ITEMS_COUNT',
}

export type IMenuFilterInput = {
  search?: Maybe<Scalars['String']>
}

export type IMenuItemCountableConnection = {
  __typename?: 'MenuItemCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IMenuItemCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IMenuItemCountableEdge = {
  __typename?: 'MenuItemCountableEdge'
  node: IMenuItem
  cursor: Scalars['String']
}

export type IMenuItemSortingInput = {
  direction: IOrderDirection
  field: IMenuItemsSortField
}

export enum IMenuItemsSortField {
  Name = 'NAME',
}

export type IMenuItemFilterInput = {
  search?: Maybe<Scalars['String']>
}

export type IPlugin = INode & {
  __typename?: 'Plugin'
  id: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  active: Scalars['Boolean']
  configuration?: Maybe<Array<Maybe<IConfigurationItem>>>
}

export type IConfigurationItem = {
  __typename?: 'ConfigurationItem'
  name: Scalars['String']
  value?: Maybe<Scalars['String']>
  type?: Maybe<IConfigurationTypeFieldEnum>
  helpText?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export enum IConfigurationTypeFieldEnum {
  String = 'STRING',
  Boolean = 'BOOLEAN',
  Secret = 'SECRET',
  Password = 'PASSWORD',
}

export type IPluginCountableConnection = {
  __typename?: 'PluginCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IPluginCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IPluginCountableEdge = {
  __typename?: 'PluginCountableEdge'
  node: IPlugin
  cursor: Scalars['String']
}

export type IPluginFilterInput = {
  active?: Maybe<Scalars['Boolean']>
  search?: Maybe<Scalars['String']>
}

export type IPluginSortingInput = {
  direction: IOrderDirection
  field: IPluginSortField
}

export enum IPluginSortField {
  Name = 'NAME',
  IsActive = 'IS_ACTIVE',
}

export type ISaleCountableConnection = {
  __typename?: 'SaleCountableConnection'
  pageInfo: IPageInfo
  edges: Array<ISaleCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type ISaleCountableEdge = {
  __typename?: 'SaleCountableEdge'
  node: ISale
  cursor: Scalars['String']
}

export type ISaleFilterInput = {
  status?: Maybe<Array<Maybe<IDiscountStatusEnum>>>
  saleType?: Maybe<IDiscountValueTypeEnum>
  started?: Maybe<IDateTimeRangeInput>
  search?: Maybe<Scalars['String']>
}

export enum IDiscountStatusEnum {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED',
}

export type IDateTimeRangeInput = {
  gte?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
}

export type ISaleSortingInput = {
  direction: IOrderDirection
  field: ISaleSortField
}

export enum ISaleSortField {
  Name = 'NAME',
  StartDate = 'START_DATE',
  EndDate = 'END_DATE',
  Value = 'VALUE',
  Type = 'TYPE',
}

export type IVoucherCountableConnection = {
  __typename?: 'VoucherCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IVoucherCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IVoucherCountableEdge = {
  __typename?: 'VoucherCountableEdge'
  node: IVoucher
  cursor: Scalars['String']
}

export type IVoucherFilterInput = {
  status?: Maybe<Array<Maybe<IDiscountStatusEnum>>>
  timesUsed?: Maybe<IIntRangeInput>
  discountType?: Maybe<Array<Maybe<IVoucherDiscountType>>>
  started?: Maybe<IDateTimeRangeInput>
  search?: Maybe<Scalars['String']>
}

export enum IVoucherDiscountType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
  Shipping = 'SHIPPING',
}

export type IVoucherSortingInput = {
  direction: IOrderDirection
  field: IVoucherSortField
}

export enum IVoucherSortField {
  Code = 'CODE',
  StartDate = 'START_DATE',
  EndDate = 'END_DATE',
  Value = 'VALUE',
  Type = 'TYPE',
  UsageLimit = 'USAGE_LIMIT',
  MinimumSpentAmount = 'MINIMUM_SPENT_AMOUNT',
}

export type ICheckoutCountableConnection = {
  __typename?: 'CheckoutCountableConnection'
  pageInfo: IPageInfo
  edges: Array<ICheckoutCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type ICheckoutCountableEdge = {
  __typename?: 'CheckoutCountableEdge'
  node: ICheckout
  cursor: Scalars['String']
}

export type ICheckoutLineCountableConnection = {
  __typename?: 'CheckoutLineCountableConnection'
  pageInfo: IPageInfo
  edges: Array<ICheckoutLineCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type ICheckoutLineCountableEdge = {
  __typename?: 'CheckoutLineCountableEdge'
  node: ICheckoutLine
  cursor: Scalars['String']
}

export type IAppCountableConnection = {
  __typename?: 'AppCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IAppCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IAppCountableEdge = {
  __typename?: 'AppCountableEdge'
  node: IApp
  cursor: Scalars['String']
}

export type IAppFilterInput = {
  search?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
}

export type IAppSortingInput = {
  direction: IOrderDirection
  field: IAppSortField
}

export enum IAppSortField {
  Name = 'NAME',
  CreationDate = 'CREATION_DATE',
}

export type IAddressValidationData = {
  __typename?: 'AddressValidationData'
  countryCode?: Maybe<Scalars['String']>
  countryName?: Maybe<Scalars['String']>
  addressFormat?: Maybe<Scalars['String']>
  addressLatinFormat?: Maybe<Scalars['String']>
  allowedFields?: Maybe<Array<Maybe<Scalars['String']>>>
  requiredFields?: Maybe<Array<Maybe<Scalars['String']>>>
  upperFields?: Maybe<Array<Maybe<Scalars['String']>>>
  countryAreaType?: Maybe<Scalars['String']>
  countryAreaChoices?: Maybe<Array<Maybe<IChoiceValue>>>
  cityType?: Maybe<Scalars['String']>
  cityChoices?: Maybe<Array<Maybe<IChoiceValue>>>
  cityAreaType?: Maybe<Scalars['String']>
  cityAreaChoices?: Maybe<Array<Maybe<IChoiceValue>>>
  postalCodeType?: Maybe<Scalars['String']>
  postalCodeMatchers?: Maybe<Array<Maybe<Scalars['String']>>>
  postalCodeExamples?: Maybe<Array<Maybe<Scalars['String']>>>
  postalCodePrefix?: Maybe<Scalars['String']>
}

export type IChoiceValue = {
  __typename?: 'ChoiceValue'
  raw?: Maybe<Scalars['String']>
  verbose?: Maybe<Scalars['String']>
}

export type IUserCountableConnection = {
  __typename?: 'UserCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IUserCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IUserCountableEdge = {
  __typename?: 'UserCountableEdge'
  node: IUser
  cursor: Scalars['String']
}

export type ICustomerFilterInput = {
  dateJoined?: Maybe<IDateRangeInput>
  moneySpent?: Maybe<IPriceRangeInput>
  numberOfOrders?: Maybe<IIntRangeInput>
  placedOrders?: Maybe<IDateRangeInput>
  search?: Maybe<Scalars['String']>
}

export type IUserSortingInput = {
  direction: IOrderDirection
  field: IUserSortField
}

export enum IUserSortField {
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME',
  Email = 'EMAIL',
  OrderCount = 'ORDER_COUNT',
}

export type IGroupCountableConnection = {
  __typename?: 'GroupCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IGroupCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IGroupCountableEdge = {
  __typename?: 'GroupCountableEdge'
  node: IGroup
  cursor: Scalars['String']
}

export type IPermissionGroupFilterInput = {
  search?: Maybe<Scalars['String']>
}

export type IPermissionGroupSortingInput = {
  direction: IOrderDirection
  field: IPermissionGroupSortField
}

export enum IPermissionGroupSortField {
  Name = 'NAME',
}

export type IStaffUserInput = {
  status?: Maybe<IStaffMemberStatus>
  search?: Maybe<Scalars['String']>
}

export enum IStaffMemberStatus {
  Active = 'ACTIVE',
  Deactivated = 'DEACTIVATED',
}

export type IServiceAccountCountableConnection = {
  __typename?: 'ServiceAccountCountableConnection'
  pageInfo: IPageInfo
  edges: Array<IServiceAccountCountableEdge>
  totalCount?: Maybe<Scalars['Int']>
}

export type IServiceAccountCountableEdge = {
  __typename?: 'ServiceAccountCountableEdge'
  node: IServiceAccount
  cursor: Scalars['String']
}

export type IServiceAccountFilterInput = {
  search?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
}

export type IServiceAccountSortingInput = {
  direction: IOrderDirection
  field: IServiceAccountSortField
}

export enum IServiceAccountSortField {
  Name = 'NAME',
  CreationDate = 'CREATION_DATE',
}

export type I_Entity =
  | IAddress
  | IUser
  | IGroup
  | IServiceAccount
  | IApp
  | IProductVariant
  | IProduct
  | IProductType
  | ICollection
  | ICategory
  | IProductImage

export type I_Service = {
  __typename?: '_Service'
  sdl?: Maybe<Scalars['String']>
}

export type IMutation = {
  __typename?: 'Mutation'
  webhookCreate?: Maybe<IWebhookCreate>
  webhookDelete?: Maybe<IWebhookDelete>
  webhookUpdate?: Maybe<IWebhookUpdate>
  createWarehouse?: Maybe<IWarehouseCreate>
  updateWarehouse?: Maybe<IWarehouseUpdate>
  deleteWarehouse?: Maybe<IWarehouseDelete>
  assignWarehouseShippingZone?: Maybe<IWarehouseShippingZoneAssign>
  unassignWarehouseShippingZone?: Maybe<IWarehouseShippingZoneUnassign>
  authorizationKeyAdd?: Maybe<IAuthorizationKeyAdd>
  authorizationKeyDelete?: Maybe<IAuthorizationKeyDelete>
  staffNotificationRecipientCreate?: Maybe<IStaffNotificationRecipientCreate>
  staffNotificationRecipientUpdate?: Maybe<IStaffNotificationRecipientUpdate>
  staffNotificationRecipientDelete?: Maybe<IStaffNotificationRecipientDelete>
  homepageCollectionUpdate?: Maybe<IHomepageCollectionUpdate>
  shopDomainUpdate?: Maybe<IShopDomainUpdate>
  shopSettingsUpdate?: Maybe<IShopSettingsUpdate>
  shopFetchTaxRates?: Maybe<IShopFetchTaxRates>
  shopSettingsTranslate?: Maybe<IShopSettingsTranslate>
  shopAddressUpdate?: Maybe<IShopAddressUpdate>
  shippingPriceCreate?: Maybe<IShippingPriceCreate>
  shippingPriceDelete?: Maybe<IShippingPriceDelete>
  shippingPriceBulkDelete?: Maybe<IShippingPriceBulkDelete>
  shippingPriceUpdate?: Maybe<IShippingPriceUpdate>
  shippingPriceTranslate?: Maybe<IShippingPriceTranslate>
  shippingZoneCreate?: Maybe<IShippingZoneCreate>
  shippingZoneDelete?: Maybe<IShippingZoneDelete>
  shippingZoneBulkDelete?: Maybe<IShippingZoneBulkDelete>
  shippingZoneUpdate?: Maybe<IShippingZoneUpdate>
  attributeCreate?: Maybe<IAttributeCreate>
  attributeDelete?: Maybe<IAttributeDelete>
  attributeBulkDelete?: Maybe<IAttributeBulkDelete>
  attributeAssign?: Maybe<IAttributeAssign>
  attributeUnassign?: Maybe<IAttributeUnassign>
  attributeUpdate?: Maybe<IAttributeUpdate>
  attributeTranslate?: Maybe<IAttributeTranslate>
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  attributeUpdateMetadata?: Maybe<IAttributeUpdateMeta>
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  attributeClearMetadata?: Maybe<IAttributeClearMeta>
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  attributeUpdatePrivateMetadata?: Maybe<IAttributeUpdatePrivateMeta>
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  attributeClearPrivateMetadata?: Maybe<IAttributeClearPrivateMeta>
  attributeValueCreate?: Maybe<IAttributeValueCreate>
  attributeValueDelete?: Maybe<IAttributeValueDelete>
  attributeValueBulkDelete?: Maybe<IAttributeValueBulkDelete>
  attributeValueUpdate?: Maybe<IAttributeValueUpdate>
  attributeValueTranslate?: Maybe<IAttributeValueTranslate>
  attributeReorderValues?: Maybe<IAttributeReorderValues>
  categoryCreate?: Maybe<ICategoryCreate>
  categoryDelete?: Maybe<ICategoryDelete>
  categoryBulkDelete?: Maybe<ICategoryBulkDelete>
  categoryUpdate?: Maybe<ICategoryUpdate>
  categoryTranslate?: Maybe<ICategoryTranslate>
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  categoryUpdateMetadata?: Maybe<ICategoryUpdateMeta>
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  categoryClearMetadata?: Maybe<ICategoryClearMeta>
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  categoryUpdatePrivateMetadata?: Maybe<ICategoryUpdatePrivateMeta>
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  categoryClearPrivateMetadata?: Maybe<ICategoryClearPrivateMeta>
  collectionAddProducts?: Maybe<ICollectionAddProducts>
  collectionCreate?: Maybe<ICollectionCreate>
  collectionDelete?: Maybe<ICollectionDelete>
  collectionReorderProducts?: Maybe<ICollectionReorderProducts>
  collectionBulkDelete?: Maybe<ICollectionBulkDelete>
  collectionBulkPublish?: Maybe<ICollectionBulkPublish>
  collectionRemoveProducts?: Maybe<ICollectionRemoveProducts>
  collectionUpdate?: Maybe<ICollectionUpdate>
  collectionTranslate?: Maybe<ICollectionTranslate>
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  collectionUpdateMetadata?: Maybe<ICollectionUpdateMeta>
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  collectionClearMetadata?: Maybe<ICollectionClearMeta>
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  collectionUpdatePrivateMetadata?: Maybe<ICollectionUpdatePrivateMeta>
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  collectionClearPrivateMetadata?: Maybe<ICollectionClearPrivateMeta>
  productCreate?: Maybe<IProductCreate>
  productDelete?: Maybe<IProductDelete>
  productBulkDelete?: Maybe<IProductBulkDelete>
  productBulkPublish?: Maybe<IProductBulkPublish>
  productUpdate?: Maybe<IProductUpdate>
  productTranslate?: Maybe<IProductTranslate>
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productUpdateMetadata?: Maybe<IProductUpdateMeta>
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productClearMetadata?: Maybe<IProductClearMeta>
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productUpdatePrivateMetadata?: Maybe<IProductUpdatePrivateMeta>
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productClearPrivateMetadata?: Maybe<IProductClearPrivateMeta>
  productImageCreate?: Maybe<IProductImageCreate>
  productImageDelete?: Maybe<IProductImageDelete>
  productImageBulkDelete?: Maybe<IProductImageBulkDelete>
  productImageReorder?: Maybe<IProductImageReorder>
  productImageUpdate?: Maybe<IProductImageUpdate>
  productTypeCreate?: Maybe<IProductTypeCreate>
  productTypeDelete?: Maybe<IProductTypeDelete>
  productTypeBulkDelete?: Maybe<IProductTypeBulkDelete>
  productTypeUpdate?: Maybe<IProductTypeUpdate>
  productTypeReorderAttributes?: Maybe<IProductTypeReorderAttributes>
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productTypeUpdateMetadata?: Maybe<IProductTypeUpdateMeta>
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productTypeClearMetadata?: Maybe<IProductTypeClearMeta>
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productTypeUpdatePrivateMetadata?: Maybe<IProductTypeUpdatePrivateMeta>
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productTypeClearPrivateMetadata?: Maybe<IProductTypeClearPrivateMeta>
  digitalContentCreate?: Maybe<IDigitalContentCreate>
  digitalContentDelete?: Maybe<IDigitalContentDelete>
  digitalContentUpdate?: Maybe<IDigitalContentUpdate>
  digitalContentUrlCreate?: Maybe<IDigitalContentUrlCreate>
  productVariantCreate?: Maybe<IProductVariantCreate>
  productVariantDelete?: Maybe<IProductVariantDelete>
  productVariantBulkCreate?: Maybe<IProductVariantBulkCreate>
  productVariantBulkDelete?: Maybe<IProductVariantBulkDelete>
  productVariantStocksCreate?: Maybe<IProductVariantStocksCreate>
  productVariantStocksDelete?: Maybe<IProductVariantStocksDelete>
  productVariantStocksUpdate?: Maybe<IProductVariantStocksUpdate>
  productVariantUpdate?: Maybe<IProductVariantUpdate>
  productVariantTranslate?: Maybe<IProductVariantTranslate>
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productVariantUpdateMetadata?: Maybe<IProductVariantUpdateMeta>
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productVariantClearMetadata?: Maybe<IProductVariantClearMeta>
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productVariantUpdatePrivateMetadata?: Maybe<IProductVariantUpdatePrivateMeta>
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productVariantClearPrivateMetadata?: Maybe<IProductVariantClearPrivateMeta>
  variantImageAssign?: Maybe<IVariantImageAssign>
  variantImageUnassign?: Maybe<IVariantImageUnassign>
  paymentCapture?: Maybe<IPaymentCapture>
  paymentRefund?: Maybe<IPaymentRefund>
  paymentVoid?: Maybe<IPaymentVoid>
  paymentSecureConfirm?: Maybe<IPaymentSecureConfirm>
  pageCreate?: Maybe<IPageCreate>
  pageDelete?: Maybe<IPageDelete>
  pageBulkDelete?: Maybe<IPageBulkDelete>
  pageBulkPublish?: Maybe<IPageBulkPublish>
  pageUpdate?: Maybe<IPageUpdate>
  pageTranslate?: Maybe<IPageTranslate>
  draftOrderComplete?: Maybe<IDraftOrderComplete>
  draftOrderCreate?: Maybe<IDraftOrderCreate>
  draftOrderDelete?: Maybe<IDraftOrderDelete>
  draftOrderBulkDelete?: Maybe<IDraftOrderBulkDelete>
  draftOrderLinesBulkDelete?: Maybe<IDraftOrderLinesBulkDelete>
  draftOrderLinesCreate?: Maybe<IDraftOrderLinesCreate>
  draftOrderLineDelete?: Maybe<IDraftOrderLineDelete>
  draftOrderLineUpdate?: Maybe<IDraftOrderLineUpdate>
  draftOrderUpdate?: Maybe<IDraftOrderUpdate>
  orderAddNote?: Maybe<IOrderAddNote>
  orderCancel?: Maybe<IOrderCancel>
  orderCapture?: Maybe<IOrderCapture>
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderClearPrivateMeta?: Maybe<IOrderClearPrivateMeta>
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderClearMeta?: Maybe<IOrderClearMeta>
  orderFulfill?: Maybe<IOrderFulfill>
  orderFulfillmentCancel?: Maybe<IFulfillmentCancel>
  orderFulfillmentUpdateTracking?: Maybe<IFulfillmentUpdateTracking>
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderFulfillmentClearMeta?: Maybe<IFulfillmentClearMeta>
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderFulfillmentClearPrivateMeta?: Maybe<IFulfillmentClearPrivateMeta>
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderFulfillmentUpdateMeta?: Maybe<IFulfillmentUpdateMeta>
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderFulfillmentUpdatePrivateMeta?: Maybe<IFulfillmentUpdatePrivateMeta>
  orderMarkAsPaid?: Maybe<IOrderMarkAsPaid>
  orderRefund?: Maybe<IOrderRefund>
  orderUpdate?: Maybe<IOrderUpdate>
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderUpdateMeta?: Maybe<IOrderUpdateMeta>
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderUpdatePrivateMeta?: Maybe<IOrderUpdatePrivateMeta>
  orderUpdateShipping?: Maybe<IOrderUpdateShipping>
  orderVoid?: Maybe<IOrderVoid>
  orderBulkCancel?: Maybe<IOrderBulkCancel>
  deleteMetadata?: Maybe<IDeleteMetadata>
  deletePrivateMetadata?: Maybe<IDeletePrivateMetadata>
  updateMetadata?: Maybe<IUpdateMetadata>
  updatePrivateMetadata?: Maybe<IUpdatePrivateMetadata>
  assignNavigation?: Maybe<IAssignNavigation>
  menuCreate?: Maybe<IMenuCreate>
  menuDelete?: Maybe<IMenuDelete>
  menuBulkDelete?: Maybe<IMenuBulkDelete>
  menuUpdate?: Maybe<IMenuUpdate>
  menuItemCreate?: Maybe<IMenuItemCreate>
  menuItemDelete?: Maybe<IMenuItemDelete>
  menuItemBulkDelete?: Maybe<IMenuItemBulkDelete>
  menuItemUpdate?: Maybe<IMenuItemUpdate>
  menuItemTranslate?: Maybe<IMenuItemTranslate>
  menuItemMove?: Maybe<IMenuItemMove>
  giftCardActivate?: Maybe<IGiftCardActivate>
  giftCardCreate?: Maybe<IGiftCardCreate>
  giftCardDeactivate?: Maybe<IGiftCardDeactivate>
  giftCardUpdate?: Maybe<IGiftCardUpdate>
  pluginUpdate?: Maybe<IPluginUpdate>
  saleCreate?: Maybe<ISaleCreate>
  saleDelete?: Maybe<ISaleDelete>
  saleBulkDelete?: Maybe<ISaleBulkDelete>
  saleUpdate?: Maybe<ISaleUpdate>
  saleCataloguesAdd?: Maybe<ISaleAddCatalogues>
  saleCataloguesRemove?: Maybe<ISaleRemoveCatalogues>
  saleTranslate?: Maybe<ISaleTranslate>
  voucherCreate?: Maybe<IVoucherCreate>
  voucherDelete?: Maybe<IVoucherDelete>
  voucherBulkDelete?: Maybe<IVoucherBulkDelete>
  voucherUpdate?: Maybe<IVoucherUpdate>
  voucherCataloguesAdd?: Maybe<IVoucherAddCatalogues>
  voucherCataloguesRemove?: Maybe<IVoucherRemoveCatalogues>
  voucherTranslate?: Maybe<IVoucherTranslate>
  tokenCreate?: Maybe<ICreateToken>
  tokenRefresh?: Maybe<IRefreshToken>
  tokenVerify?: Maybe<IVerifyToken>
  checkoutAddPromoCode?: Maybe<ICheckoutAddPromoCode>
  checkoutBillingAddressUpdate?: Maybe<ICheckoutBillingAddressUpdate>
  checkoutComplete?: Maybe<ICheckoutComplete>
  checkoutCreate?: Maybe<ICheckoutCreate>
  checkoutCustomerAttach?: Maybe<ICheckoutCustomerAttach>
  checkoutCustomerDetach?: Maybe<ICheckoutCustomerDetach>
  checkoutEmailUpdate?: Maybe<ICheckoutEmailUpdate>
  checkoutLineDelete?: Maybe<ICheckoutLineDelete>
  checkoutLinesAdd?: Maybe<ICheckoutLinesAdd>
  checkoutLinesUpdate?: Maybe<ICheckoutLinesUpdate>
  checkoutRemovePromoCode?: Maybe<ICheckoutRemovePromoCode>
  checkoutPaymentCreate?: Maybe<ICheckoutPaymentCreate>
  checkoutShippingAddressUpdate?: Maybe<ICheckoutShippingAddressUpdate>
  checkoutShippingMethodUpdate?: Maybe<ICheckoutShippingMethodUpdate>
  /** @deprecated Use the `updateMetadata` mutation. This field will be removed after 2020-07-31. */
  checkoutUpdateMetadata?: Maybe<ICheckoutUpdateMeta>
  /** @deprecated Use the `deleteMetadata` mutation. This field will be removed after 2020-07-31. */
  checkoutClearMetadata?: Maybe<ICheckoutClearMeta>
  /** @deprecated Use the `updatePrivateMetadata` mutation. This field will be removed after 2020-07-31. */
  checkoutUpdatePrivateMetadata?: Maybe<ICheckoutUpdatePrivateMeta>
  /** @deprecated Use the `deletePrivateMetadata` mutation. This field will be removed after 2020-07-31. */
  checkoutClearPrivateMetadata?: Maybe<ICheckoutClearPrivateMeta>
  appCreate?: Maybe<IAppCreate>
  appUpdate?: Maybe<IAppUpdate>
  appDelete?: Maybe<IAppDelete>
  appTokenCreate?: Maybe<IAppTokenCreate>
  appTokenDelete?: Maybe<IAppTokenDelete>
  requestPasswordReset?: Maybe<IRequestPasswordReset>
  confirmAccount?: Maybe<IConfirmAccount>
  setPassword?: Maybe<ISetPassword>
  passwordChange?: Maybe<IPasswordChange>
  requestEmailChange?: Maybe<IRequestEmailChange>
  confirmEmailChange?: Maybe<IConfirmEmailChange>
  accountAddressCreate?: Maybe<IAccountAddressCreate>
  accountAddressUpdate?: Maybe<IAccountAddressUpdate>
  accountAddressDelete?: Maybe<IAccountAddressDelete>
  accountSetDefaultAddress?: Maybe<IAccountSetDefaultAddress>
  accountRegister?: Maybe<IAccountRegister>
  accountUpdate?: Maybe<IAccountUpdate>
  accountRequestDeletion?: Maybe<IAccountRequestDeletion>
  accountDelete?: Maybe<IAccountDelete>
  /** @deprecated Use the `updateMetadata` mutation. This field will be removed after 2020-07-31. */
  accountUpdateMeta?: Maybe<IAccountUpdateMeta>
  addressCreate?: Maybe<IAddressCreate>
  addressUpdate?: Maybe<IAddressUpdate>
  addressDelete?: Maybe<IAddressDelete>
  addressSetDefault?: Maybe<IAddressSetDefault>
  customerCreate?: Maybe<ICustomerCreate>
  customerUpdate?: Maybe<ICustomerUpdate>
  customerDelete?: Maybe<ICustomerDelete>
  customerBulkDelete?: Maybe<ICustomerBulkDelete>
  staffCreate?: Maybe<IStaffCreate>
  staffUpdate?: Maybe<IStaffUpdate>
  staffDelete?: Maybe<IStaffDelete>
  staffBulkDelete?: Maybe<IStaffBulkDelete>
  userAvatarUpdate?: Maybe<IUserAvatarUpdate>
  userAvatarDelete?: Maybe<IUserAvatarDelete>
  userBulkSetActive?: Maybe<IUserBulkSetActive>
  /** @deprecated Use the `updateMetadata` mutation. This field will be removed after 2020-07-31. */
  userUpdateMetadata?: Maybe<IUserUpdateMeta>
  /** @deprecated Use the `deleteMetadata` mutation. This field will be removed after 2020-07-31. */
  userClearMetadata?: Maybe<IUserClearMeta>
  /** @deprecated Use the `updatePrivateMetadata` mutation. This field will be removed after 2020-07-31. */
  userUpdatePrivateMetadata?: Maybe<IUserUpdatePrivateMeta>
  /** @deprecated Use the `deletePrivateMetadata` mutation. This field will be removed after 2020-07-31. */
  userClearPrivateMetadata?: Maybe<IUserClearPrivateMeta>
  /** @deprecated Use the `appCreate` mutation instead. This field will be removed after 2020-07-31. */
  serviceAccountCreate?: Maybe<IServiceAccountCreate>
  /** @deprecated Use the `appUpdate` mutation instead. This field will be removed after 2020-07-31. */
  serviceAccountUpdate?: Maybe<IServiceAccountUpdate>
  /** @deprecated Use the `appDelete` mutation instead. This field will be removed after 2020-07-31. */
  serviceAccountDelete?: Maybe<IServiceAccountDelete>
  /** @deprecated Use the `updatePrivateMetadata` mutation with App instead.This field will be removed after 2020-07-31. */
  serviceAccountUpdatePrivateMetadata?: Maybe<IServiceAccountUpdatePrivateMeta>
  /** @deprecated Use the `deletePrivateMetadata` mutation with App instead.This field will be removed after 2020-07-31. */
  serviceAccountClearPrivateMetadata?: Maybe<IServiceAccountClearPrivateMeta>
  /** @deprecated Use the `appTokenCreate` mutation instead. This field will be removed after 2020-07-31. */
  serviceAccountTokenCreate?: Maybe<IServiceAccountTokenCreate>
  /** @deprecated Use the `appTokenDelete` mutation instead. This field will be removed after 2020-07-31. */
  serviceAccountTokenDelete?: Maybe<IServiceAccountTokenDelete>
  permissionGroupCreate?: Maybe<IPermissionGroupCreate>
  permissionGroupUpdate?: Maybe<IPermissionGroupUpdate>
  permissionGroupDelete?: Maybe<IPermissionGroupDelete>
}

export type IMutationWebhookCreateArgs = {
  input: IWebhookCreateInput
}

export type IMutationWebhookDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationWebhookUpdateArgs = {
  id: Scalars['ID']
  input: IWebhookUpdateInput
}

export type IMutationCreateWarehouseArgs = {
  input: IWarehouseCreateInput
}

export type IMutationUpdateWarehouseArgs = {
  id: Scalars['ID']
  input: IWarehouseUpdateInput
}

export type IMutationDeleteWarehouseArgs = {
  id: Scalars['ID']
}

export type IMutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID']
  shippingZoneIds: Array<Scalars['ID']>
}

export type IMutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID']
  shippingZoneIds: Array<Scalars['ID']>
}

export type IMutationAuthorizationKeyAddArgs = {
  input: IAuthorizationKeyInput
  keyType: IAuthorizationKeyType
}

export type IMutationAuthorizationKeyDeleteArgs = {
  keyType: IAuthorizationKeyType
}

export type IMutationStaffNotificationRecipientCreateArgs = {
  input: IStaffNotificationRecipientInput
}

export type IMutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID']
  input: IStaffNotificationRecipientInput
}

export type IMutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationHomepageCollectionUpdateArgs = {
  collection?: Maybe<Scalars['ID']>
}

export type IMutationShopDomainUpdateArgs = {
  input?: Maybe<ISiteDomainInput>
}

export type IMutationShopSettingsUpdateArgs = {
  input: IShopSettingsInput
}

export type IMutationShopSettingsTranslateArgs = {
  input: IShopSettingsTranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationShopAddressUpdateArgs = {
  input?: Maybe<IAddressInput>
}

export type IMutationShippingPriceCreateArgs = {
  input: IShippingPriceInput
}

export type IMutationShippingPriceDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationShippingPriceBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationShippingPriceUpdateArgs = {
  id: Scalars['ID']
  input: IShippingPriceInput
}

export type IMutationShippingPriceTranslateArgs = {
  id: Scalars['ID']
  input: INameTranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationShippingZoneCreateArgs = {
  input: IShippingZoneCreateInput
}

export type IMutationShippingZoneDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationShippingZoneBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationShippingZoneUpdateArgs = {
  id: Scalars['ID']
  input: IShippingZoneUpdateInput
}

export type IMutationAttributeCreateArgs = {
  input: IAttributeCreateInput
}

export type IMutationAttributeDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationAttributeBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationAttributeAssignArgs = {
  operations: Array<Maybe<IAttributeAssignInput>>
  productTypeId: Scalars['ID']
}

export type IMutationAttributeUnassignArgs = {
  attributeIds: Array<Maybe<Scalars['ID']>>
  productTypeId: Scalars['ID']
}

export type IMutationAttributeUpdateArgs = {
  id: Scalars['ID']
  input: IAttributeUpdateInput
}

export type IMutationAttributeTranslateArgs = {
  id: Scalars['ID']
  input: INameTranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationAttributeUpdateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationAttributeClearMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationAttributeUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationAttributeClearPrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationAttributeValueCreateArgs = {
  attribute: Scalars['ID']
  input: IAttributeValueCreateInput
}

export type IMutationAttributeValueDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationAttributeValueBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationAttributeValueUpdateArgs = {
  id: Scalars['ID']
  input: IAttributeValueCreateInput
}

export type IMutationAttributeValueTranslateArgs = {
  id: Scalars['ID']
  input: INameTranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID']
  moves: Array<Maybe<IReorderInput>>
}

export type IMutationCategoryCreateArgs = {
  input: ICategoryInput
  parent?: Maybe<Scalars['ID']>
}

export type IMutationCategoryDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationCategoryBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationCategoryUpdateArgs = {
  id: Scalars['ID']
  input: ICategoryInput
}

export type IMutationCategoryTranslateArgs = {
  id: Scalars['ID']
  input: ITranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationCategoryUpdateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationCategoryClearMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationCategoryUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationCategoryClearPrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID']
  products: Array<Maybe<Scalars['ID']>>
}

export type IMutationCollectionCreateArgs = {
  input: ICollectionCreateInput
}

export type IMutationCollectionDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID']
  moves: Array<Maybe<IMoveProductInput>>
}

export type IMutationCollectionBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationCollectionBulkPublishArgs = {
  ids: Array<Maybe<Scalars['ID']>>
  isPublished: Scalars['Boolean']
}

export type IMutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID']
  products: Array<Maybe<Scalars['ID']>>
}

export type IMutationCollectionUpdateArgs = {
  id: Scalars['ID']
  input: ICollectionInput
}

export type IMutationCollectionTranslateArgs = {
  id: Scalars['ID']
  input: ITranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationCollectionUpdateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationCollectionClearMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationCollectionUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationCollectionClearPrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationProductCreateArgs = {
  input: IProductCreateInput
}

export type IMutationProductDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationProductBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationProductBulkPublishArgs = {
  ids: Array<Maybe<Scalars['ID']>>
  isPublished: Scalars['Boolean']
}

export type IMutationProductUpdateArgs = {
  id: Scalars['ID']
  input: IProductInput
}

export type IMutationProductTranslateArgs = {
  id: Scalars['ID']
  input: ITranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationProductUpdateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationProductClearMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationProductUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationProductClearPrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationProductImageCreateArgs = {
  input: IProductImageCreateInput
}

export type IMutationProductImageDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationProductImageBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationProductImageReorderArgs = {
  imagesIds: Array<Maybe<Scalars['ID']>>
  productId: Scalars['ID']
}

export type IMutationProductImageUpdateArgs = {
  id: Scalars['ID']
  input: IProductImageUpdateInput
}

export type IMutationProductTypeCreateArgs = {
  input: IProductTypeInput
}

export type IMutationProductTypeDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationProductTypeBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationProductTypeUpdateArgs = {
  id: Scalars['ID']
  input: IProductTypeInput
}

export type IMutationProductTypeReorderAttributesArgs = {
  moves: Array<Maybe<IReorderInput>>
  productTypeId: Scalars['ID']
  type: IAttributeTypeEnum
}

export type IMutationProductTypeUpdateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationProductTypeClearMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationProductTypeUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationProductTypeClearPrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationDigitalContentCreateArgs = {
  input: IDigitalContentUploadInput
  variantId: Scalars['ID']
}

export type IMutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID']
}

export type IMutationDigitalContentUpdateArgs = {
  input: IDigitalContentInput
  variantId: Scalars['ID']
}

export type IMutationDigitalContentUrlCreateArgs = {
  input: IDigitalContentUrlCreateInput
}

export type IMutationProductVariantCreateArgs = {
  input: IProductVariantCreateInput
}

export type IMutationProductVariantDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationProductVariantBulkCreateArgs = {
  product: Scalars['ID']
  variants: Array<Maybe<IProductVariantBulkCreateInput>>
}

export type IMutationProductVariantBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationProductVariantStocksCreateArgs = {
  stocks: Array<IStockInput>
  variantId: Scalars['ID']
}

export type IMutationProductVariantStocksDeleteArgs = {
  variantId: Scalars['ID']
  warehouseIds?: Maybe<Array<Scalars['ID']>>
}

export type IMutationProductVariantStocksUpdateArgs = {
  stocks: Array<IStockInput>
  variantId: Scalars['ID']
}

export type IMutationProductVariantUpdateArgs = {
  id: Scalars['ID']
  input: IProductVariantInput
}

export type IMutationProductVariantTranslateArgs = {
  id: Scalars['ID']
  input: INameTranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationProductVariantUpdateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationProductVariantClearMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationProductVariantUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationProductVariantClearPrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationVariantImageAssignArgs = {
  imageId: Scalars['ID']
  variantId: Scalars['ID']
}

export type IMutationVariantImageUnassignArgs = {
  imageId: Scalars['ID']
  variantId: Scalars['ID']
}

export type IMutationPaymentCaptureArgs = {
  amount?: Maybe<Scalars['Decimal']>
  paymentId: Scalars['ID']
}

export type IMutationPaymentRefundArgs = {
  amount?: Maybe<Scalars['Decimal']>
  paymentId: Scalars['ID']
}

export type IMutationPaymentVoidArgs = {
  paymentId: Scalars['ID']
}

export type IMutationPaymentSecureConfirmArgs = {
  paymentId: Scalars['ID']
}

export type IMutationPageCreateArgs = {
  input: IPageInput
}

export type IMutationPageDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationPageBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationPageBulkPublishArgs = {
  ids: Array<Maybe<Scalars['ID']>>
  isPublished: Scalars['Boolean']
}

export type IMutationPageUpdateArgs = {
  id: Scalars['ID']
  input: IPageInput
}

export type IMutationPageTranslateArgs = {
  id: Scalars['ID']
  input: IPageTranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationDraftOrderCompleteArgs = {
  id: Scalars['ID']
}

export type IMutationDraftOrderCreateArgs = {
  input: IDraftOrderCreateInput
}

export type IMutationDraftOrderDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationDraftOrderBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationDraftOrderLinesCreateArgs = {
  id: Scalars['ID']
  input: Array<Maybe<IOrderLineCreateInput>>
}

export type IMutationDraftOrderLineDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationDraftOrderLineUpdateArgs = {
  id: Scalars['ID']
  input: IOrderLineInput
}

export type IMutationDraftOrderUpdateArgs = {
  id: Scalars['ID']
  input: IDraftOrderInput
}

export type IMutationOrderAddNoteArgs = {
  order: Scalars['ID']
  input: IOrderAddNoteInput
}

export type IMutationOrderCancelArgs = {
  id: Scalars['ID']
}

export type IMutationOrderCaptureArgs = {
  amount: Scalars['Decimal']
  id: Scalars['ID']
}

export type IMutationOrderClearPrivateMetaArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationOrderClearMetaArgs = {
  input: IMetaPath
  token: Scalars['UUID']
}

export type IMutationOrderFulfillArgs = {
  input: IOrderFulfillInput
  order?: Maybe<Scalars['ID']>
}

export type IMutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID']
  input: IFulfillmentCancelInput
}

export type IMutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID']
  input: IFulfillmentUpdateTrackingInput
}

export type IMutationOrderFulfillmentClearMetaArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationOrderFulfillmentClearPrivateMetaArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationOrderFulfillmentUpdateMetaArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationOrderFulfillmentUpdatePrivateMetaArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationOrderMarkAsPaidArgs = {
  id: Scalars['ID']
}

export type IMutationOrderRefundArgs = {
  amount: Scalars['Decimal']
  id: Scalars['ID']
}

export type IMutationOrderUpdateArgs = {
  id: Scalars['ID']
  input: IOrderUpdateInput
}

export type IMutationOrderUpdateMetaArgs = {
  input: IMetaInput
  token: Scalars['UUID']
}

export type IMutationOrderUpdatePrivateMetaArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationOrderUpdateShippingArgs = {
  order: Scalars['ID']
  input?: Maybe<IOrderUpdateShippingInput>
}

export type IMutationOrderVoidArgs = {
  id: Scalars['ID']
}

export type IMutationOrderBulkCancelArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationDeleteMetadataArgs = {
  id: Scalars['ID']
  keys: Array<Scalars['String']>
}

export type IMutationDeletePrivateMetadataArgs = {
  id: Scalars['ID']
  keys: Array<Scalars['String']>
}

export type IMutationUpdateMetadataArgs = {
  id: Scalars['ID']
  input: Array<IMetadataInput>
}

export type IMutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: Array<IMetadataInput>
}

export type IMutationAssignNavigationArgs = {
  menu?: Maybe<Scalars['ID']>
  navigationType: INavigationType
}

export type IMutationMenuCreateArgs = {
  input: IMenuCreateInput
}

export type IMutationMenuDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationMenuBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationMenuUpdateArgs = {
  id: Scalars['ID']
  input: IMenuInput
}

export type IMutationMenuItemCreateArgs = {
  input: IMenuItemCreateInput
}

export type IMutationMenuItemDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationMenuItemBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationMenuItemUpdateArgs = {
  id: Scalars['ID']
  input: IMenuItemInput
}

export type IMutationMenuItemTranslateArgs = {
  id: Scalars['ID']
  input: INameTranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationMenuItemMoveArgs = {
  menu: Scalars['ID']
  moves: Array<Maybe<IMenuItemMoveInput>>
}

export type IMutationGiftCardActivateArgs = {
  id: Scalars['ID']
}

export type IMutationGiftCardCreateArgs = {
  input: IGiftCardCreateInput
}

export type IMutationGiftCardDeactivateArgs = {
  id: Scalars['ID']
}

export type IMutationGiftCardUpdateArgs = {
  id: Scalars['ID']
  input: IGiftCardUpdateInput
}

export type IMutationPluginUpdateArgs = {
  id: Scalars['ID']
  input: IPluginUpdateInput
}

export type IMutationSaleCreateArgs = {
  input: ISaleInput
}

export type IMutationSaleDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationSaleBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationSaleUpdateArgs = {
  id: Scalars['ID']
  input: ISaleInput
}

export type IMutationSaleCataloguesAddArgs = {
  id: Scalars['ID']
  input: ICatalogueInput
}

export type IMutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID']
  input: ICatalogueInput
}

export type IMutationSaleTranslateArgs = {
  id: Scalars['ID']
  input: INameTranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationVoucherCreateArgs = {
  input: IVoucherInput
}

export type IMutationVoucherDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationVoucherBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationVoucherUpdateArgs = {
  id: Scalars['ID']
  input: IVoucherInput
}

export type IMutationVoucherCataloguesAddArgs = {
  id: Scalars['ID']
  input: ICatalogueInput
}

export type IMutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID']
  input: ICatalogueInput
}

export type IMutationVoucherTranslateArgs = {
  id: Scalars['ID']
  input: INameTranslationInput
  languageCode: ILanguageCodeEnum
}

export type IMutationTokenCreateArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type IMutationTokenRefreshArgs = {
  token: Scalars['String']
}

export type IMutationTokenVerifyArgs = {
  token: Scalars['String']
}

export type IMutationCheckoutAddPromoCodeArgs = {
  checkoutId: Scalars['ID']
  promoCode: Scalars['String']
}

export type IMutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: IAddressInput
  checkoutId: Scalars['ID']
}

export type IMutationCheckoutCompleteArgs = {
  checkoutId: Scalars['ID']
  redirectUrl?: Maybe<Scalars['String']>
  storeSource?: Maybe<Scalars['Boolean']>
}

export type IMutationCheckoutCreateArgs = {
  input: ICheckoutCreateInput
}

export type IMutationCheckoutCustomerAttachArgs = {
  checkoutId: Scalars['ID']
  customerId?: Maybe<Scalars['ID']>
}

export type IMutationCheckoutCustomerDetachArgs = {
  checkoutId: Scalars['ID']
}

export type IMutationCheckoutEmailUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  email: Scalars['String']
}

export type IMutationCheckoutLineDeleteArgs = {
  checkoutId: Scalars['ID']
  lineId?: Maybe<Scalars['ID']>
}

export type IMutationCheckoutLinesAddArgs = {
  checkoutId: Scalars['ID']
  lines: Array<Maybe<ICheckoutLineInput>>
}

export type IMutationCheckoutLinesUpdateArgs = {
  checkoutId: Scalars['ID']
  lines: Array<Maybe<ICheckoutLineInput>>
}

export type IMutationCheckoutRemovePromoCodeArgs = {
  checkoutId: Scalars['ID']
  promoCode: Scalars['String']
}

export type IMutationCheckoutPaymentCreateArgs = {
  checkoutId: Scalars['ID']
  input: IPaymentInput
}

export type IMutationCheckoutShippingAddressUpdateArgs = {
  checkoutId: Scalars['ID']
  shippingAddress: IAddressInput
}

export type IMutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  shippingMethodId: Scalars['ID']
}

export type IMutationCheckoutUpdateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationCheckoutClearMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationCheckoutUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationCheckoutClearPrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationAppCreateArgs = {
  input: IAppInput
}

export type IMutationAppUpdateArgs = {
  id: Scalars['ID']
  input: IAppInput
}

export type IMutationAppDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationAppTokenCreateArgs = {
  input: IAppTokenInput
}

export type IMutationAppTokenDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationRequestPasswordResetArgs = {
  email: Scalars['String']
  redirectUrl: Scalars['String']
}

export type IMutationConfirmAccountArgs = {
  email: Scalars['String']
  token: Scalars['String']
}

export type IMutationSetPasswordArgs = {
  token: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type IMutationPasswordChangeArgs = {
  newPassword: Scalars['String']
  oldPassword: Scalars['String']
}

export type IMutationRequestEmailChangeArgs = {
  newEmail: Scalars['String']
  password: Scalars['String']
  redirectUrl: Scalars['String']
}

export type IMutationConfirmEmailChangeArgs = {
  token: Scalars['String']
}

export type IMutationAccountAddressCreateArgs = {
  input: IAddressInput
  type?: Maybe<IAddressTypeEnum>
}

export type IMutationAccountAddressUpdateArgs = {
  id: Scalars['ID']
  input: IAddressInput
}

export type IMutationAccountAddressDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID']
  type: IAddressTypeEnum
}

export type IMutationAccountRegisterArgs = {
  input: IAccountRegisterInput
}

export type IMutationAccountUpdateArgs = {
  input: IAccountInput
}

export type IMutationAccountRequestDeletionArgs = {
  redirectUrl: Scalars['String']
}

export type IMutationAccountDeleteArgs = {
  token: Scalars['String']
}

export type IMutationAccountUpdateMetaArgs = {
  input: IMetaInput
}

export type IMutationAddressCreateArgs = {
  input: IAddressInput
  userId: Scalars['ID']
}

export type IMutationAddressUpdateArgs = {
  id: Scalars['ID']
  input: IAddressInput
}

export type IMutationAddressDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationAddressSetDefaultArgs = {
  addressId: Scalars['ID']
  type: IAddressTypeEnum
  userId: Scalars['ID']
}

export type IMutationCustomerCreateArgs = {
  input: IUserCreateInput
}

export type IMutationCustomerUpdateArgs = {
  id: Scalars['ID']
  input: ICustomerInput
}

export type IMutationCustomerDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationCustomerBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationStaffCreateArgs = {
  input: IStaffCreateInput
}

export type IMutationStaffUpdateArgs = {
  id: Scalars['ID']
  input: IStaffUpdateInput
}

export type IMutationStaffDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationStaffBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type IMutationUserAvatarUpdateArgs = {
  image: Scalars['Upload']
}

export type IMutationUserBulkSetActiveArgs = {
  ids: Array<Maybe<Scalars['ID']>>
  isActive: Scalars['Boolean']
}

export type IMutationUserUpdateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationUserClearMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationUserUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationUserClearPrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationServiceAccountCreateArgs = {
  input: IServiceAccountInput
}

export type IMutationServiceAccountUpdateArgs = {
  id: Scalars['ID']
  input: IServiceAccountInput
}

export type IMutationServiceAccountDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationServiceAccountUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaInput
}

export type IMutationServiceAccountClearPrivateMetadataArgs = {
  id: Scalars['ID']
  input: IMetaPath
}

export type IMutationServiceAccountTokenCreateArgs = {
  input: IServiceAccountTokenInput
}

export type IMutationServiceAccountTokenDeleteArgs = {
  id: Scalars['ID']
}

export type IMutationPermissionGroupCreateArgs = {
  input: IPermissionGroupCreateInput
}

export type IMutationPermissionGroupUpdateArgs = {
  id: Scalars['ID']
  input: IPermissionGroupUpdateInput
}

export type IMutationPermissionGroupDeleteArgs = {
  id: Scalars['ID']
}

export type IWebhookCreate = {
  __typename?: 'WebhookCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  webhookErrors: Array<IWebhookError>
  webhook?: Maybe<IWebhook>
}

export type IError = {
  __typename?: 'Error'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export type IWebhookError = {
  __typename?: 'WebhookError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IWebhookErrorCode
}

export enum IWebhookErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type IWebhookCreateInput = {
  name?: Maybe<Scalars['String']>
  targetUrl?: Maybe<Scalars['String']>
  events?: Maybe<Array<Maybe<IWebhookEventTypeEnum>>>
  serviceAccount?: Maybe<Scalars['ID']>
  app?: Maybe<Scalars['ID']>
  isActive?: Maybe<Scalars['Boolean']>
  secretKey?: Maybe<Scalars['String']>
}

export type IWebhookDelete = {
  __typename?: 'WebhookDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  webhook?: Maybe<IWebhook>
  webhookErrors: Array<IWebhookError>
}

export type IWebhookUpdate = {
  __typename?: 'WebhookUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  webhook?: Maybe<IWebhook>
  webhookErrors: Array<IWebhookError>
}

export type IWebhookUpdateInput = {
  name?: Maybe<Scalars['String']>
  targetUrl?: Maybe<Scalars['String']>
  events?: Maybe<Array<Maybe<IWebhookEventTypeEnum>>>
  serviceAccount?: Maybe<Scalars['ID']>
  app?: Maybe<Scalars['ID']>
  isActive?: Maybe<Scalars['Boolean']>
  secretKey?: Maybe<Scalars['String']>
}

export type IWarehouseCreate = {
  __typename?: 'WarehouseCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  warehouseErrors: Array<IWarehouseError>
  warehouse?: Maybe<IWarehouse>
}

export type IWarehouseError = {
  __typename?: 'WarehouseError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IWarehouseErrorCode
}

export enum IWarehouseErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type IWarehouseCreateInput = {
  slug?: Maybe<Scalars['String']>
  companyName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  name: Scalars['String']
  address: IWarehouseAddressInput
  shippingZones?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type IWarehouseAddressInput = {
  streetAddress1: Scalars['String']
  streetAddress2?: Maybe<Scalars['String']>
  city: Scalars['String']
  cityArea?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  country: ICountryCode
  countryArea?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

export type IWarehouseUpdate = {
  __typename?: 'WarehouseUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  warehouseErrors: Array<IWarehouseError>
  warehouse?: Maybe<IWarehouse>
}

export type IWarehouseUpdateInput = {
  slug?: Maybe<Scalars['String']>
  companyName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  address?: Maybe<IWarehouseAddressInput>
}

export type IWarehouseDelete = {
  __typename?: 'WarehouseDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  warehouseErrors: Array<IWarehouseError>
  warehouse?: Maybe<IWarehouse>
}

export type IWarehouseShippingZoneAssign = {
  __typename?: 'WarehouseShippingZoneAssign'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  warehouse?: Maybe<IWarehouse>
  warehouseErrors: Array<IWarehouseError>
}

export type IWarehouseShippingZoneUnassign = {
  __typename?: 'WarehouseShippingZoneUnassign'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  warehouse?: Maybe<IWarehouse>
  warehouseErrors: Array<IWarehouseError>
}

export type IAuthorizationKeyAdd = {
  __typename?: 'AuthorizationKeyAdd'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  authorizationKey?: Maybe<IAuthorizationKey>
  shop?: Maybe<IShop>
  shopErrors: Array<IShopError>
}

export type IShopError = {
  __typename?: 'ShopError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IShopErrorCode
}

export enum IShopErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotFetchTaxRates = 'CANNOT_FETCH_TAX_RATES',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type IAuthorizationKeyInput = {
  key: Scalars['String']
  password: Scalars['String']
}

export type IAuthorizationKeyDelete = {
  __typename?: 'AuthorizationKeyDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  authorizationKey?: Maybe<IAuthorizationKey>
  shop?: Maybe<IShop>
  shopErrors: Array<IShopError>
}

export type IStaffNotificationRecipientCreate = {
  __typename?: 'StaffNotificationRecipientCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shopErrors: Array<IShopError>
  staffNotificationRecipient?: Maybe<IStaffNotificationRecipient>
}

export type IStaffNotificationRecipientInput = {
  user?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
  active?: Maybe<Scalars['Boolean']>
}

export type IStaffNotificationRecipientUpdate = {
  __typename?: 'StaffNotificationRecipientUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shopErrors: Array<IShopError>
  staffNotificationRecipient?: Maybe<IStaffNotificationRecipient>
}

export type IStaffNotificationRecipientDelete = {
  __typename?: 'StaffNotificationRecipientDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shopErrors: Array<IShopError>
  staffNotificationRecipient?: Maybe<IStaffNotificationRecipient>
}

export type IHomepageCollectionUpdate = {
  __typename?: 'HomepageCollectionUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shop?: Maybe<IShop>
  shopErrors: Array<IShopError>
}

export type IShopDomainUpdate = {
  __typename?: 'ShopDomainUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shop?: Maybe<IShop>
  shopErrors: Array<IShopError>
}

export type ISiteDomainInput = {
  domain?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type IShopSettingsUpdate = {
  __typename?: 'ShopSettingsUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shop?: Maybe<IShop>
  shopErrors: Array<IShopError>
}

export type IShopSettingsInput = {
  headerText?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  includeTaxesInPrices?: Maybe<Scalars['Boolean']>
  displayGrossPrices?: Maybe<Scalars['Boolean']>
  chargeTaxesOnShipping?: Maybe<Scalars['Boolean']>
  trackInventoryByDefault?: Maybe<Scalars['Boolean']>
  defaultWeightUnit?: Maybe<IWeightUnitsEnum>
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>
  defaultMailSenderName?: Maybe<Scalars['String']>
  defaultMailSenderAddress?: Maybe<Scalars['String']>
  customerSetPasswordUrl?: Maybe<Scalars['String']>
}

export type IShopFetchTaxRates = {
  __typename?: 'ShopFetchTaxRates'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shop?: Maybe<IShop>
  shopErrors: Array<IShopError>
}

export type IShopSettingsTranslate = {
  __typename?: 'ShopSettingsTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shop?: Maybe<IShop>
  translationErrors: Array<ITranslationError>
}

export type ITranslationError = {
  __typename?: 'TranslationError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: ITranslationErrorCode
}

export enum ITranslationErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
}

export type IShopSettingsTranslationInput = {
  headerText?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type IShopAddressUpdate = {
  __typename?: 'ShopAddressUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shop?: Maybe<IShop>
  shopErrors: Array<IShopError>
}

export type IAddressInput = {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  companyName?: Maybe<Scalars['String']>
  streetAddress1?: Maybe<Scalars['String']>
  streetAddress2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  cityArea?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  country?: Maybe<ICountryCode>
  countryArea?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

export type IShippingPriceCreate = {
  __typename?: 'ShippingPriceCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shippingZone?: Maybe<IShippingZone>
  shippingErrors: Array<IShippingError>
  shippingMethod?: Maybe<IShippingMethod>
}

export type IShippingError = {
  __typename?: 'ShippingError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IShippingErrorCode
  warehouses?: Maybe<Array<Scalars['ID']>>
}

export enum IShippingErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MaxLessThanMin = 'MAX_LESS_THAN_MIN',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
}

export type IShippingPriceInput = {
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Decimal']>
  minimumOrderPrice?: Maybe<Scalars['Decimal']>
  maximumOrderPrice?: Maybe<Scalars['Decimal']>
  minimumOrderWeight?: Maybe<Scalars['WeightScalar']>
  maximumOrderWeight?: Maybe<Scalars['WeightScalar']>
  type?: Maybe<IShippingMethodTypeEnum>
  shippingZone?: Maybe<Scalars['ID']>
}

export type IShippingPriceDelete = {
  __typename?: 'ShippingPriceDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shippingMethod?: Maybe<IShippingMethod>
  shippingZone?: Maybe<IShippingZone>
  shippingErrors: Array<IShippingError>
}

export type IShippingPriceBulkDelete = {
  __typename?: 'ShippingPriceBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  shippingErrors: Array<IShippingError>
}

export type IShippingPriceUpdate = {
  __typename?: 'ShippingPriceUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shippingZone?: Maybe<IShippingZone>
  shippingErrors: Array<IShippingError>
  shippingMethod?: Maybe<IShippingMethod>
}

export type IShippingPriceTranslate = {
  __typename?: 'ShippingPriceTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  shippingMethod?: Maybe<IShippingMethod>
}

export type INameTranslationInput = {
  name?: Maybe<Scalars['String']>
}

export type IShippingZoneCreate = {
  __typename?: 'ShippingZoneCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shippingZone?: Maybe<IShippingZone>
  shippingErrors: Array<IShippingError>
}

export type IShippingZoneCreateInput = {
  name?: Maybe<Scalars['String']>
  countries?: Maybe<Array<Maybe<Scalars['String']>>>
  default?: Maybe<Scalars['Boolean']>
  addWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type IShippingZoneDelete = {
  __typename?: 'ShippingZoneDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shippingErrors: Array<IShippingError>
  shippingZone?: Maybe<IShippingZone>
}

export type IShippingZoneBulkDelete = {
  __typename?: 'ShippingZoneBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  shippingErrors: Array<IShippingError>
}

export type IShippingZoneUpdate = {
  __typename?: 'ShippingZoneUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  shippingZone?: Maybe<IShippingZone>
  shippingErrors: Array<IShippingError>
}

export type IShippingZoneUpdateInput = {
  name?: Maybe<Scalars['String']>
  countries?: Maybe<Array<Maybe<Scalars['String']>>>
  default?: Maybe<Scalars['Boolean']>
  addWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>
  removeWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type IAttributeCreate = {
  __typename?: 'AttributeCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  attribute?: Maybe<IAttribute>
  productErrors: Array<IProductError>
}

export type IProductError = {
  __typename?: 'ProductError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IProductErrorCode
}

export enum IProductErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotProductsImage = 'NOT_PRODUCTS_IMAGE',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  VariantNoDigitalContent = 'VARIANT_NO_DIGITAL_CONTENT',
}

export type IAttributeCreateInput = {
  inputType?: Maybe<IAttributeInputTypeEnum>
  name: Scalars['String']
  slug?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<IAttributeValueCreateInput>>>
  valueRequired?: Maybe<Scalars['Boolean']>
  isVariantOnly?: Maybe<Scalars['Boolean']>
  visibleInStorefront?: Maybe<Scalars['Boolean']>
  filterableInStorefront?: Maybe<Scalars['Boolean']>
  filterableInDashboard?: Maybe<Scalars['Boolean']>
  storefrontSearchPosition?: Maybe<Scalars['Int']>
  availableInGrid?: Maybe<Scalars['Boolean']>
}

export type IAttributeValueCreateInput = {
  name: Scalars['String']
}

export type IAttributeDelete = {
  __typename?: 'AttributeDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  attribute?: Maybe<IAttribute>
}

export type IAttributeBulkDelete = {
  __typename?: 'AttributeBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productErrors: Array<IProductError>
}

export type IAttributeAssign = {
  __typename?: 'AttributeAssign'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productType?: Maybe<IProductType>
  productErrors: Array<IProductAttributeError>
}

export type IProductAttributeError = {
  __typename?: 'ProductAttributeError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IProductErrorCode
  attributes?: Maybe<Array<Scalars['ID']>>
}

export type IAttributeAssignInput = {
  id: Scalars['ID']
  type: IAttributeTypeEnum
}

export enum IAttributeTypeEnum {
  Product = 'PRODUCT',
  Variant = 'VARIANT',
}

export type IAttributeUnassign = {
  __typename?: 'AttributeUnassign'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productType?: Maybe<IProductType>
  productErrors: Array<IProductError>
}

export type IAttributeUpdate = {
  __typename?: 'AttributeUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  attribute?: Maybe<IAttribute>
  productErrors: Array<IProductError>
}

export type IAttributeUpdateInput = {
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  removeValues?: Maybe<Array<Maybe<Scalars['ID']>>>
  addValues?: Maybe<Array<Maybe<IAttributeValueCreateInput>>>
  valueRequired?: Maybe<Scalars['Boolean']>
  isVariantOnly?: Maybe<Scalars['Boolean']>
  visibleInStorefront?: Maybe<Scalars['Boolean']>
  filterableInStorefront?: Maybe<Scalars['Boolean']>
  filterableInDashboard?: Maybe<Scalars['Boolean']>
  storefrontSearchPosition?: Maybe<Scalars['Int']>
  availableInGrid?: Maybe<Scalars['Boolean']>
}

export type IAttributeTranslate = {
  __typename?: 'AttributeTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  attribute?: Maybe<IAttribute>
}

export type IAttributeUpdateMeta = {
  __typename?: 'AttributeUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  attribute?: Maybe<IAttribute>
}

export type IMetaInput = {
  namespace: Scalars['String']
  clientName: Scalars['String']
  key: Scalars['String']
  value: Scalars['String']
}

export type IAttributeClearMeta = {
  __typename?: 'AttributeClearMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  attribute?: Maybe<IAttribute>
}

export type IMetaPath = {
  namespace: Scalars['String']
  clientName: Scalars['String']
  key: Scalars['String']
}

export type IAttributeUpdatePrivateMeta = {
  __typename?: 'AttributeUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  attribute?: Maybe<IAttribute>
}

export type IAttributeClearPrivateMeta = {
  __typename?: 'AttributeClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  attribute?: Maybe<IAttribute>
}

export type IAttributeValueCreate = {
  __typename?: 'AttributeValueCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  attribute?: Maybe<IAttribute>
  productErrors: Array<IProductError>
  attributeValue?: Maybe<IAttributeValue>
}

export type IAttributeValueDelete = {
  __typename?: 'AttributeValueDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  attribute?: Maybe<IAttribute>
  productErrors: Array<IProductError>
  attributeValue?: Maybe<IAttributeValue>
}

export type IAttributeValueBulkDelete = {
  __typename?: 'AttributeValueBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productErrors: Array<IProductError>
}

export type IAttributeValueUpdate = {
  __typename?: 'AttributeValueUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  attribute?: Maybe<IAttribute>
  productErrors: Array<IProductError>
  attributeValue?: Maybe<IAttributeValue>
}

export type IAttributeValueTranslate = {
  __typename?: 'AttributeValueTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  attributeValue?: Maybe<IAttributeValue>
}

export type IAttributeReorderValues = {
  __typename?: 'AttributeReorderValues'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  attribute?: Maybe<IAttribute>
  productErrors: Array<IProductError>
}

export type IReorderInput = {
  id: Scalars['ID']
  sortOrder?: Maybe<Scalars['Int']>
}

export type ICategoryCreate = {
  __typename?: 'CategoryCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  category?: Maybe<ICategory>
}

export type ICategoryInput = {
  description?: Maybe<Scalars['String']>
  descriptionJson?: Maybe<Scalars['JSONString']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  seo?: Maybe<ISeoInput>
  backgroundImage?: Maybe<Scalars['Upload']>
  backgroundImageAlt?: Maybe<Scalars['String']>
}

export type ISeoInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type ICategoryDelete = {
  __typename?: 'CategoryDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  category?: Maybe<ICategory>
}

export type ICategoryBulkDelete = {
  __typename?: 'CategoryBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productErrors: Array<IProductError>
}

export type ICategoryUpdate = {
  __typename?: 'CategoryUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  category?: Maybe<ICategory>
}

export type ICategoryTranslate = {
  __typename?: 'CategoryTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  category?: Maybe<ICategory>
}

export type ITranslationInput = {
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  descriptionJson?: Maybe<Scalars['JSONString']>
}

export type ICategoryUpdateMeta = {
  __typename?: 'CategoryUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  category?: Maybe<ICategory>
}

export type ICategoryClearMeta = {
  __typename?: 'CategoryClearMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  category?: Maybe<ICategory>
}

export type ICategoryUpdatePrivateMeta = {
  __typename?: 'CategoryUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  category?: Maybe<ICategory>
}

export type ICategoryClearPrivateMeta = {
  __typename?: 'CategoryClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  category?: Maybe<ICategory>
}

export type ICollectionAddProducts = {
  __typename?: 'CollectionAddProducts'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  collection?: Maybe<ICollection>
  productErrors: Array<IProductError>
}

export type ICollectionCreate = {
  __typename?: 'CollectionCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  collection?: Maybe<ICollection>
}

export type ICollectionCreateInput = {
  isPublished?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  descriptionJson?: Maybe<Scalars['JSONString']>
  backgroundImage?: Maybe<Scalars['Upload']>
  backgroundImageAlt?: Maybe<Scalars['String']>
  seo?: Maybe<ISeoInput>
  publicationDate?: Maybe<Scalars['Date']>
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type ICollectionDelete = {
  __typename?: 'CollectionDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  collection?: Maybe<ICollection>
}

export type ICollectionReorderProducts = {
  __typename?: 'CollectionReorderProducts'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  collection?: Maybe<ICollection>
  productErrors: Array<IProductError>
}

export type IMoveProductInput = {
  productId: Scalars['ID']
  sortOrder?: Maybe<Scalars['Int']>
}

export type ICollectionBulkDelete = {
  __typename?: 'CollectionBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productErrors: Array<IProductError>
}

export type ICollectionBulkPublish = {
  __typename?: 'CollectionBulkPublish'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productErrors: Array<IProductError>
}

export type ICollectionRemoveProducts = {
  __typename?: 'CollectionRemoveProducts'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  collection?: Maybe<ICollection>
  productErrors: Array<IProductError>
}

export type ICollectionUpdate = {
  __typename?: 'CollectionUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  collection?: Maybe<ICollection>
}

export type ICollectionInput = {
  isPublished?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  descriptionJson?: Maybe<Scalars['JSONString']>
  backgroundImage?: Maybe<Scalars['Upload']>
  backgroundImageAlt?: Maybe<Scalars['String']>
  seo?: Maybe<ISeoInput>
  publicationDate?: Maybe<Scalars['Date']>
}

export type ICollectionTranslate = {
  __typename?: 'CollectionTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  collection?: Maybe<ICollection>
}

export type ICollectionUpdateMeta = {
  __typename?: 'CollectionUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  collection?: Maybe<ICollection>
}

export type ICollectionClearMeta = {
  __typename?: 'CollectionClearMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  collection?: Maybe<ICollection>
}

export type ICollectionUpdatePrivateMeta = {
  __typename?: 'CollectionUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  collection?: Maybe<ICollection>
}

export type ICollectionClearPrivateMeta = {
  __typename?: 'CollectionClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  collection?: Maybe<ICollection>
}

export type IProductCreate = {
  __typename?: 'ProductCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  product?: Maybe<IProduct>
}

export type IProductCreateInput = {
  attributes?: Maybe<Array<Maybe<IAttributeValueInput>>>
  publicationDate?: Maybe<Scalars['Date']>
  category?: Maybe<Scalars['ID']>
  chargeTaxes?: Maybe<Scalars['Boolean']>
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
  description?: Maybe<Scalars['String']>
  descriptionJson?: Maybe<Scalars['JSONString']>
  isPublished?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  basePrice?: Maybe<Scalars['Decimal']>
  taxCode?: Maybe<Scalars['String']>
  seo?: Maybe<ISeoInput>
  weight?: Maybe<Scalars['WeightScalar']>
  sku?: Maybe<Scalars['String']>
  trackInventory?: Maybe<Scalars['Boolean']>
  productType: Scalars['ID']
  stocks?: Maybe<Array<IStockInput>>
}

export type IAttributeValueInput = {
  id?: Maybe<Scalars['ID']>
  values: Array<Maybe<Scalars['String']>>
}

export type IStockInput = {
  warehouse: Scalars['ID']
  quantity?: Maybe<Scalars['Int']>
}

export type IProductDelete = {
  __typename?: 'ProductDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  product?: Maybe<IProduct>
}

export type IProductBulkDelete = {
  __typename?: 'ProductBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productErrors: Array<IProductError>
}

export type IProductBulkPublish = {
  __typename?: 'ProductBulkPublish'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productErrors: Array<IProductError>
}

export type IProductUpdate = {
  __typename?: 'ProductUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  product?: Maybe<IProduct>
}

export type IProductInput = {
  attributes?: Maybe<Array<Maybe<IAttributeValueInput>>>
  publicationDate?: Maybe<Scalars['Date']>
  category?: Maybe<Scalars['ID']>
  chargeTaxes?: Maybe<Scalars['Boolean']>
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
  description?: Maybe<Scalars['String']>
  descriptionJson?: Maybe<Scalars['JSONString']>
  isPublished?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  basePrice?: Maybe<Scalars['Decimal']>
  taxCode?: Maybe<Scalars['String']>
  seo?: Maybe<ISeoInput>
  weight?: Maybe<Scalars['WeightScalar']>
  sku?: Maybe<Scalars['String']>
  trackInventory?: Maybe<Scalars['Boolean']>
}

export type IProductTranslate = {
  __typename?: 'ProductTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  product?: Maybe<IProduct>
}

export type IProductUpdateMeta = {
  __typename?: 'ProductUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  product?: Maybe<IProduct>
}

export type IProductClearMeta = {
  __typename?: 'ProductClearMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  product?: Maybe<IProduct>
}

export type IProductUpdatePrivateMeta = {
  __typename?: 'ProductUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  product?: Maybe<IProduct>
}

export type IProductClearPrivateMeta = {
  __typename?: 'ProductClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  product?: Maybe<IProduct>
}

export type IProductImageCreate = {
  __typename?: 'ProductImageCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  product?: Maybe<IProduct>
  image?: Maybe<IProductImage>
  productErrors: Array<IProductError>
}

export type IProductImageCreateInput = {
  alt?: Maybe<Scalars['String']>
  image: Scalars['Upload']
  product: Scalars['ID']
}

export type IProductImageDelete = {
  __typename?: 'ProductImageDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  product?: Maybe<IProduct>
  image?: Maybe<IProductImage>
  productErrors: Array<IProductError>
}

export type IProductImageBulkDelete = {
  __typename?: 'ProductImageBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productErrors: Array<IProductError>
}

export type IProductImageReorder = {
  __typename?: 'ProductImageReorder'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  product?: Maybe<IProduct>
  images?: Maybe<Array<Maybe<IProductImage>>>
  productErrors: Array<IProductError>
}

export type IProductImageUpdate = {
  __typename?: 'ProductImageUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  product?: Maybe<IProduct>
  image?: Maybe<IProductImage>
  productErrors: Array<IProductError>
}

export type IProductImageUpdateInput = {
  alt?: Maybe<Scalars['String']>
}

export type IProductTypeCreate = {
  __typename?: 'ProductTypeCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productType?: Maybe<IProductType>
}

export type IProductTypeInput = {
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  hasVariants?: Maybe<Scalars['Boolean']>
  productAttributes?: Maybe<Array<Maybe<Scalars['ID']>>>
  variantAttributes?: Maybe<Array<Maybe<Scalars['ID']>>>
  isShippingRequired?: Maybe<Scalars['Boolean']>
  isDigital?: Maybe<Scalars['Boolean']>
  weight?: Maybe<Scalars['WeightScalar']>
  taxCode?: Maybe<Scalars['String']>
}

export type IProductTypeDelete = {
  __typename?: 'ProductTypeDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productType?: Maybe<IProductType>
}

export type IProductTypeBulkDelete = {
  __typename?: 'ProductTypeBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productErrors: Array<IProductError>
}

export type IProductTypeUpdate = {
  __typename?: 'ProductTypeUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productType?: Maybe<IProductType>
}

export type IProductTypeReorderAttributes = {
  __typename?: 'ProductTypeReorderAttributes'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productType?: Maybe<IProductType>
  productErrors: Array<IProductError>
}

export type IProductTypeUpdateMeta = {
  __typename?: 'ProductTypeUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productType?: Maybe<IProductType>
}

export type IProductTypeClearMeta = {
  __typename?: 'ProductTypeClearMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productType?: Maybe<IProductType>
}

export type IProductTypeUpdatePrivateMeta = {
  __typename?: 'ProductTypeUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productType?: Maybe<IProductType>
}

export type IProductTypeClearPrivateMeta = {
  __typename?: 'ProductTypeClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productType?: Maybe<IProductType>
}

export type IDigitalContentCreate = {
  __typename?: 'DigitalContentCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  variant?: Maybe<IProductVariant>
  content?: Maybe<IDigitalContent>
  productErrors: Array<IProductError>
}

export type IDigitalContentUploadInput = {
  useDefaultSettings: Scalars['Boolean']
  maxDownloads?: Maybe<Scalars['Int']>
  urlValidDays?: Maybe<Scalars['Int']>
  automaticFulfillment?: Maybe<Scalars['Boolean']>
  contentFile: Scalars['Upload']
}

export type IDigitalContentDelete = {
  __typename?: 'DigitalContentDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  variant?: Maybe<IProductVariant>
  productErrors: Array<IProductError>
}

export type IDigitalContentUpdate = {
  __typename?: 'DigitalContentUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  variant?: Maybe<IProductVariant>
  content?: Maybe<IDigitalContent>
  productErrors: Array<IProductError>
}

export type IDigitalContentInput = {
  useDefaultSettings: Scalars['Boolean']
  maxDownloads?: Maybe<Scalars['Int']>
  urlValidDays?: Maybe<Scalars['Int']>
  automaticFulfillment?: Maybe<Scalars['Boolean']>
}

export type IDigitalContentUrlCreate = {
  __typename?: 'DigitalContentUrlCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  digitalContentUrl?: Maybe<IDigitalContentUrl>
}

export type IDigitalContentUrlCreateInput = {
  content: Scalars['ID']
}

export type IProductVariantCreate = {
  __typename?: 'ProductVariantCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productVariant?: Maybe<IProductVariant>
}

export type IProductVariantCreateInput = {
  attributes: Array<Maybe<IAttributeValueInput>>
  costPrice?: Maybe<Scalars['Decimal']>
  priceOverride?: Maybe<Scalars['Decimal']>
  sku?: Maybe<Scalars['String']>
  trackInventory?: Maybe<Scalars['Boolean']>
  weight?: Maybe<Scalars['WeightScalar']>
  product: Scalars['ID']
  stocks?: Maybe<Array<IStockInput>>
}

export type IProductVariantDelete = {
  __typename?: 'ProductVariantDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productVariant?: Maybe<IProductVariant>
}

export type IProductVariantBulkCreate = {
  __typename?: 'ProductVariantBulkCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productVariants: Array<IProductVariant>
  bulkProductErrors: Array<IBulkProductError>
}

export type IBulkProductError = {
  __typename?: 'BulkProductError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IProductErrorCode
  index?: Maybe<Scalars['Int']>
  warehouses?: Maybe<Array<Scalars['ID']>>
}

export type IProductVariantBulkCreateInput = {
  attributes: Array<Maybe<IAttributeValueInput>>
  costPrice?: Maybe<Scalars['Decimal']>
  priceOverride?: Maybe<Scalars['Decimal']>
  sku: Scalars['String']
  trackInventory?: Maybe<Scalars['Boolean']>
  weight?: Maybe<Scalars['WeightScalar']>
  stocks?: Maybe<Array<IStockInput>>
}

export type IProductVariantBulkDelete = {
  __typename?: 'ProductVariantBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  productErrors: Array<IProductError>
}

export type IProductVariantStocksCreate = {
  __typename?: 'ProductVariantStocksCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productVariant?: Maybe<IProductVariant>
  bulkStockErrors: Array<IBulkStockError>
}

export type IBulkStockError = {
  __typename?: 'BulkStockError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IProductErrorCode
  index?: Maybe<Scalars['Int']>
}

export type IProductVariantStocksDelete = {
  __typename?: 'ProductVariantStocksDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productVariant?: Maybe<IProductVariant>
  stockErrors: Array<IStockError>
}

export type IStockError = {
  __typename?: 'StockError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IStockErrorCode
}

export enum IStockErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type IProductVariantStocksUpdate = {
  __typename?: 'ProductVariantStocksUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productVariant?: Maybe<IProductVariant>
  bulkStockErrors: Array<IBulkStockError>
}

export type IProductVariantUpdate = {
  __typename?: 'ProductVariantUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productVariant?: Maybe<IProductVariant>
}

export type IProductVariantInput = {
  attributes?: Maybe<Array<Maybe<IAttributeValueInput>>>
  costPrice?: Maybe<Scalars['Decimal']>
  priceOverride?: Maybe<Scalars['Decimal']>
  sku?: Maybe<Scalars['String']>
  trackInventory?: Maybe<Scalars['Boolean']>
  weight?: Maybe<Scalars['WeightScalar']>
}

export type IProductVariantTranslate = {
  __typename?: 'ProductVariantTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  productVariant?: Maybe<IProductVariant>
}

export type IProductVariantUpdateMeta = {
  __typename?: 'ProductVariantUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productVariant?: Maybe<IProductVariant>
}

export type IProductVariantClearMeta = {
  __typename?: 'ProductVariantClearMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productVariant?: Maybe<IProductVariant>
}

export type IProductVariantUpdatePrivateMeta = {
  __typename?: 'ProductVariantUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productVariant?: Maybe<IProductVariant>
}

export type IProductVariantClearPrivateMeta = {
  __typename?: 'ProductVariantClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productErrors: Array<IProductError>
  productVariant?: Maybe<IProductVariant>
}

export type IVariantImageAssign = {
  __typename?: 'VariantImageAssign'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productVariant?: Maybe<IProductVariant>
  image?: Maybe<IProductImage>
  productErrors: Array<IProductError>
}

export type IVariantImageUnassign = {
  __typename?: 'VariantImageUnassign'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  productVariant?: Maybe<IProductVariant>
  image?: Maybe<IProductImage>
  productErrors: Array<IProductError>
}

export type IPaymentCapture = {
  __typename?: 'PaymentCapture'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  payment?: Maybe<IPayment>
  paymentErrors: Array<IPaymentError>
}

export type IPaymentError = {
  __typename?: 'PaymentError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IPaymentErrorCode
}

export enum IPaymentErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  PartialPaymentNotAllowed = 'PARTIAL_PAYMENT_NOT_ALLOWED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  PaymentError = 'PAYMENT_ERROR',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type IPaymentRefund = {
  __typename?: 'PaymentRefund'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  payment?: Maybe<IPayment>
  paymentErrors: Array<IPaymentError>
}

export type IPaymentVoid = {
  __typename?: 'PaymentVoid'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  payment?: Maybe<IPayment>
  paymentErrors: Array<IPaymentError>
}

export type IPaymentSecureConfirm = {
  __typename?: 'PaymentSecureConfirm'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  payment?: Maybe<IPayment>
  paymentErrors: Array<IPaymentError>
}

export type IPageCreate = {
  __typename?: 'PageCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  pageErrors: Array<IPageError>
  page?: Maybe<IPage>
}

export type IPageError = {
  __typename?: 'PageError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IPageErrorCode
}

export enum IPageErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type IPageInput = {
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  contentJson?: Maybe<Scalars['JSONString']>
  isPublished?: Maybe<Scalars['Boolean']>
  publicationDate?: Maybe<Scalars['String']>
  seo?: Maybe<ISeoInput>
}

export type IPageDelete = {
  __typename?: 'PageDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  pageErrors: Array<IPageError>
  page?: Maybe<IPage>
}

export type IPageBulkDelete = {
  __typename?: 'PageBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  pageErrors: Array<IPageError>
}

export type IPageBulkPublish = {
  __typename?: 'PageBulkPublish'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  pageErrors: Array<IPageError>
}

export type IPageUpdate = {
  __typename?: 'PageUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  pageErrors: Array<IPageError>
  page?: Maybe<IPage>
}

export type IPageTranslate = {
  __typename?: 'PageTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  page?: Maybe<IPageTranslatableContent>
}

export type IPageTranslationInput = {
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  contentJson?: Maybe<Scalars['JSONString']>
}

export type IDraftOrderComplete = {
  __typename?: 'DraftOrderComplete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
}

export type IOrderError = {
  __typename?: 'OrderError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IOrderErrorCode
  warehouse?: Maybe<Scalars['ID']>
  orderLine?: Maybe<Scalars['ID']>
}

export enum IOrderErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CannotCancelFulfillment = 'CANNOT_CANCEL_FULFILLMENT',
  CannotCancelOrder = 'CANNOT_CANCEL_ORDER',
  CannotDelete = 'CANNOT_DELETE',
  CannotRefund = 'CANNOT_REFUND',
  CaptureInactivePayment = 'CAPTURE_INACTIVE_PAYMENT',
  NotEditable = 'NOT_EDITABLE',
  FulfillOrderLine = 'FULFILL_ORDER_LINE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  NotFound = 'NOT_FOUND',
  OrderNoShippingAddress = 'ORDER_NO_SHIPPING_ADDRESS',
  PaymentError = 'PAYMENT_ERROR',
  PaymentMissing = 'PAYMENT_MISSING',
  Required = 'REQUIRED',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodRequired = 'SHIPPING_METHOD_REQUIRED',
  Unique = 'UNIQUE',
  VoidInactivePayment = 'VOID_INACTIVE_PAYMENT',
  ZeroQuantity = 'ZERO_QUANTITY',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
}

export type IDraftOrderCreate = {
  __typename?: 'DraftOrderCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  orderErrors: Array<IOrderError>
  order?: Maybe<IOrder>
}

export type IDraftOrderCreateInput = {
  billingAddress?: Maybe<IAddressInput>
  user?: Maybe<Scalars['ID']>
  userEmail?: Maybe<Scalars['String']>
  discount?: Maybe<Scalars['Decimal']>
  shippingAddress?: Maybe<IAddressInput>
  shippingMethod?: Maybe<Scalars['ID']>
  voucher?: Maybe<Scalars['ID']>
  customerNote?: Maybe<Scalars['String']>
  lines?: Maybe<Array<Maybe<IOrderLineCreateInput>>>
}

export type IOrderLineCreateInput = {
  quantity: Scalars['Int']
  variantId: Scalars['ID']
}

export type IDraftOrderDelete = {
  __typename?: 'DraftOrderDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  orderErrors: Array<IOrderError>
  order?: Maybe<IOrder>
}

export type IDraftOrderBulkDelete = {
  __typename?: 'DraftOrderBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  orderErrors: Array<IOrderError>
}

export type IDraftOrderLinesBulkDelete = {
  __typename?: 'DraftOrderLinesBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  orderErrors: Array<IOrderError>
}

export type IDraftOrderLinesCreate = {
  __typename?: 'DraftOrderLinesCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  orderLines?: Maybe<Array<IOrderLine>>
  orderErrors: Array<IOrderError>
}

export type IDraftOrderLineDelete = {
  __typename?: 'DraftOrderLineDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  orderLine?: Maybe<IOrderLine>
  orderErrors: Array<IOrderError>
}

export type IDraftOrderLineUpdate = {
  __typename?: 'DraftOrderLineUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
  orderLine?: Maybe<IOrderLine>
}

export type IOrderLineInput = {
  quantity: Scalars['Int']
}

export type IDraftOrderUpdate = {
  __typename?: 'DraftOrderUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  orderErrors: Array<IOrderError>
  order?: Maybe<IOrder>
}

export type IDraftOrderInput = {
  billingAddress?: Maybe<IAddressInput>
  user?: Maybe<Scalars['ID']>
  userEmail?: Maybe<Scalars['String']>
  discount?: Maybe<Scalars['Decimal']>
  shippingAddress?: Maybe<IAddressInput>
  shippingMethod?: Maybe<Scalars['ID']>
  voucher?: Maybe<Scalars['ID']>
  customerNote?: Maybe<Scalars['String']>
}

export type IOrderAddNote = {
  __typename?: 'OrderAddNote'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  event?: Maybe<IOrderEvent>
  orderErrors: Array<IOrderError>
}

export type IOrderAddNoteInput = {
  message: Scalars['String']
}

export type IOrderCancel = {
  __typename?: 'OrderCancel'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
}

export type IOrderCapture = {
  __typename?: 'OrderCapture'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
}

export type IOrderClearPrivateMeta = {
  __typename?: 'OrderClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
}

export type IOrderClearMeta = {
  __typename?: 'OrderClearMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
}

export type IOrderFulfill = {
  __typename?: 'OrderFulfill'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  fulfillments?: Maybe<Array<Maybe<IFulfillment>>>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
}

export type IOrderFulfillInput = {
  lines: Array<IOrderFulfillLineInput>
  notifyCustomer?: Maybe<Scalars['Boolean']>
}

export type IOrderFulfillLineInput = {
  orderLineId?: Maybe<Scalars['ID']>
  stocks: Array<IOrderFulfillStockInput>
}

export type IOrderFulfillStockInput = {
  quantity?: Maybe<Scalars['Int']>
  warehouse?: Maybe<Scalars['ID']>
}

export type IFulfillmentCancel = {
  __typename?: 'FulfillmentCancel'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  fulfillment?: Maybe<IFulfillment>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
}

export type IFulfillmentCancelInput = {
  warehouseId: Scalars['ID']
}

export type IFulfillmentUpdateTracking = {
  __typename?: 'FulfillmentUpdateTracking'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  fulfillment?: Maybe<IFulfillment>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
}

export type IFulfillmentUpdateTrackingInput = {
  trackingNumber?: Maybe<Scalars['String']>
  notifyCustomer?: Maybe<Scalars['Boolean']>
}

export type IFulfillmentClearMeta = {
  __typename?: 'FulfillmentClearMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  fulfillment?: Maybe<IFulfillment>
}

export type IFulfillmentClearPrivateMeta = {
  __typename?: 'FulfillmentClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  fulfillment?: Maybe<IFulfillment>
}

export type IFulfillmentUpdateMeta = {
  __typename?: 'FulfillmentUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  fulfillment?: Maybe<IFulfillment>
}

export type IFulfillmentUpdatePrivateMeta = {
  __typename?: 'FulfillmentUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  fulfillment?: Maybe<IFulfillment>
}

export type IOrderMarkAsPaid = {
  __typename?: 'OrderMarkAsPaid'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
}

export type IOrderRefund = {
  __typename?: 'OrderRefund'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
}

export type IOrderUpdate = {
  __typename?: 'OrderUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  orderErrors: Array<IOrderError>
  order?: Maybe<IOrder>
}

export type IOrderUpdateInput = {
  billingAddress?: Maybe<IAddressInput>
  userEmail?: Maybe<Scalars['String']>
  shippingAddress?: Maybe<IAddressInput>
}

export type IOrderUpdateMeta = {
  __typename?: 'OrderUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
}

export type IOrderUpdatePrivateMeta = {
  __typename?: 'OrderUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
}

export type IOrderUpdateShipping = {
  __typename?: 'OrderUpdateShipping'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
}

export type IOrderUpdateShippingInput = {
  shippingMethod?: Maybe<Scalars['ID']>
}

export type IOrderVoid = {
  __typename?: 'OrderVoid'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  orderErrors: Array<IOrderError>
}

export type IOrderBulkCancel = {
  __typename?: 'OrderBulkCancel'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  orderErrors: Array<IOrderError>
}

export type IDeleteMetadata = {
  __typename?: 'DeleteMetadata'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  metadataErrors: Array<IMetadataError>
  item?: Maybe<IObjectWithMetadata>
}

export type IMetadataError = {
  __typename?: 'MetadataError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IMetadataErrorCode
}

export enum IMetadataErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
}

export type IDeletePrivateMetadata = {
  __typename?: 'DeletePrivateMetadata'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  metadataErrors: Array<IMetadataError>
  item?: Maybe<IObjectWithMetadata>
}

export type IUpdateMetadata = {
  __typename?: 'UpdateMetadata'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  metadataErrors: Array<IMetadataError>
  item?: Maybe<IObjectWithMetadata>
}

export type IMetadataInput = {
  key: Scalars['String']
  value: Scalars['String']
}

export type IUpdatePrivateMetadata = {
  __typename?: 'UpdatePrivateMetadata'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  metadataErrors: Array<IMetadataError>
  item?: Maybe<IObjectWithMetadata>
}

export type IAssignNavigation = {
  __typename?: 'AssignNavigation'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  menu?: Maybe<IMenu>
  menuErrors: Array<IMenuError>
}

export type IMenuError = {
  __typename?: 'MenuError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IMenuErrorCode
}

export enum IMenuErrorCode {
  CannotAssignNode = 'CANNOT_ASSIGN_NODE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidMenuItem = 'INVALID_MENU_ITEM',
  NoMenuItemProvided = 'NO_MENU_ITEM_PROVIDED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  TooManyMenuItems = 'TOO_MANY_MENU_ITEMS',
  Unique = 'UNIQUE',
}

export enum INavigationType {
  Main = 'MAIN',
  Secondary = 'SECONDARY',
}

export type IMenuCreate = {
  __typename?: 'MenuCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  menuErrors: Array<IMenuError>
  menu?: Maybe<IMenu>
}

export type IMenuCreateInput = {
  name: Scalars['String']
  items?: Maybe<Array<Maybe<IMenuItemInput>>>
}

export type IMenuItemInput = {
  name?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['ID']>
  collection?: Maybe<Scalars['ID']>
  page?: Maybe<Scalars['ID']>
}

export type IMenuDelete = {
  __typename?: 'MenuDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  menuErrors: Array<IMenuError>
  menu?: Maybe<IMenu>
}

export type IMenuBulkDelete = {
  __typename?: 'MenuBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  menuErrors: Array<IMenuError>
}

export type IMenuUpdate = {
  __typename?: 'MenuUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  menuErrors: Array<IMenuError>
  menu?: Maybe<IMenu>
}

export type IMenuInput = {
  name?: Maybe<Scalars['String']>
}

export type IMenuItemCreate = {
  __typename?: 'MenuItemCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  menuErrors: Array<IMenuError>
  menuItem?: Maybe<IMenuItem>
}

export type IMenuItemCreateInput = {
  name: Scalars['String']
  url?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['ID']>
  collection?: Maybe<Scalars['ID']>
  page?: Maybe<Scalars['ID']>
  menu: Scalars['ID']
  parent?: Maybe<Scalars['ID']>
}

export type IMenuItemDelete = {
  __typename?: 'MenuItemDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  menuErrors: Array<IMenuError>
  menuItem?: Maybe<IMenuItem>
}

export type IMenuItemBulkDelete = {
  __typename?: 'MenuItemBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  menuErrors: Array<IMenuError>
}

export type IMenuItemUpdate = {
  __typename?: 'MenuItemUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  menuErrors: Array<IMenuError>
  menuItem?: Maybe<IMenuItem>
}

export type IMenuItemTranslate = {
  __typename?: 'MenuItemTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  menuItem?: Maybe<IMenuItem>
}

export type IMenuItemMove = {
  __typename?: 'MenuItemMove'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  menu?: Maybe<IMenu>
  menuErrors: Array<IMenuError>
}

export type IMenuItemMoveInput = {
  itemId: Scalars['ID']
  parentId?: Maybe<Scalars['ID']>
  sortOrder?: Maybe<Scalars['Int']>
}

export type IGiftCardActivate = {
  __typename?: 'GiftCardActivate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  giftCard?: Maybe<IGiftCard>
  giftCardErrors: Array<IGiftCardError>
}

export type IGiftCardError = {
  __typename?: 'GiftCardError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IGiftCardErrorCode
}

export enum IGiftCardErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type IGiftCardCreate = {
  __typename?: 'GiftCardCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  giftCardErrors: Array<IGiftCardError>
  giftCard?: Maybe<IGiftCard>
}

export type IGiftCardCreateInput = {
  startDate?: Maybe<Scalars['Date']>
  endDate?: Maybe<Scalars['Date']>
  balance?: Maybe<Scalars['Decimal']>
  userEmail?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
}

export type IGiftCardDeactivate = {
  __typename?: 'GiftCardDeactivate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  giftCard?: Maybe<IGiftCard>
  giftCardErrors: Array<IGiftCardError>
}

export type IGiftCardUpdate = {
  __typename?: 'GiftCardUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  giftCardErrors: Array<IGiftCardError>
  giftCard?: Maybe<IGiftCard>
}

export type IGiftCardUpdateInput = {
  startDate?: Maybe<Scalars['Date']>
  endDate?: Maybe<Scalars['Date']>
  balance?: Maybe<Scalars['Decimal']>
  userEmail?: Maybe<Scalars['String']>
}

export type IPluginUpdate = {
  __typename?: 'PluginUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  plugin?: Maybe<IPlugin>
  pluginsErrors: Array<IPluginError>
}

export type IPluginError = {
  __typename?: 'PluginError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IPluginErrorCode
}

export enum IPluginErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  PluginMisconfigured = 'PLUGIN_MISCONFIGURED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type IPluginUpdateInput = {
  active?: Maybe<Scalars['Boolean']>
  configuration?: Maybe<Array<Maybe<IConfigurationItemInput>>>
}

export type IConfigurationItemInput = {
  name: Scalars['String']
  value?: Maybe<Scalars['String']>
}

export type ISaleCreate = {
  __typename?: 'SaleCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  discountErrors: Array<IDiscountError>
  sale?: Maybe<ISale>
}

export type IDiscountError = {
  __typename?: 'DiscountError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IDiscountErrorCode
}

export enum IDiscountErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type ISaleInput = {
  name?: Maybe<Scalars['String']>
  type?: Maybe<IDiscountValueTypeEnum>
  value?: Maybe<Scalars['Decimal']>
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
  startDate?: Maybe<Scalars['DateTime']>
  endDate?: Maybe<Scalars['DateTime']>
}

export type ISaleDelete = {
  __typename?: 'SaleDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  discountErrors: Array<IDiscountError>
  sale?: Maybe<ISale>
}

export type ISaleBulkDelete = {
  __typename?: 'SaleBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  discountErrors: Array<IDiscountError>
}

export type ISaleUpdate = {
  __typename?: 'SaleUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  discountErrors: Array<IDiscountError>
  sale?: Maybe<ISale>
}

export type ISaleAddCatalogues = {
  __typename?: 'SaleAddCatalogues'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  sale?: Maybe<ISale>
  discountErrors: Array<IDiscountError>
}

export type ICatalogueInput = {
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type ISaleRemoveCatalogues = {
  __typename?: 'SaleRemoveCatalogues'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  sale?: Maybe<ISale>
  discountErrors: Array<IDiscountError>
}

export type ISaleTranslate = {
  __typename?: 'SaleTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  sale?: Maybe<ISale>
}

export type IVoucherCreate = {
  __typename?: 'VoucherCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  discountErrors: Array<IDiscountError>
  voucher?: Maybe<IVoucher>
}

export type IVoucherInput = {
  type?: Maybe<IVoucherTypeEnum>
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['DateTime']>
  endDate?: Maybe<Scalars['DateTime']>
  discountValueType?: Maybe<IDiscountValueTypeEnum>
  discountValue?: Maybe<Scalars['Decimal']>
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  minAmountSpent?: Maybe<Scalars['Decimal']>
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']>
  countries?: Maybe<Array<Maybe<Scalars['String']>>>
  applyOncePerOrder?: Maybe<Scalars['Boolean']>
  applyOncePerCustomer?: Maybe<Scalars['Boolean']>
  usageLimit?: Maybe<Scalars['Int']>
}

export type IVoucherDelete = {
  __typename?: 'VoucherDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  discountErrors: Array<IDiscountError>
  voucher?: Maybe<IVoucher>
}

export type IVoucherBulkDelete = {
  __typename?: 'VoucherBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  discountErrors: Array<IDiscountError>
}

export type IVoucherUpdate = {
  __typename?: 'VoucherUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  discountErrors: Array<IDiscountError>
  voucher?: Maybe<IVoucher>
}

export type IVoucherAddCatalogues = {
  __typename?: 'VoucherAddCatalogues'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  voucher?: Maybe<IVoucher>
  discountErrors: Array<IDiscountError>
}

export type IVoucherRemoveCatalogues = {
  __typename?: 'VoucherRemoveCatalogues'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  voucher?: Maybe<IVoucher>
  discountErrors: Array<IDiscountError>
}

export type IVoucherTranslate = {
  __typename?: 'VoucherTranslate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  translationErrors: Array<ITranslationError>
  voucher?: Maybe<IVoucher>
}

export type ICreateToken = {
  __typename?: 'CreateToken'
  token?: Maybe<Scalars['String']>
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IAccountError = {
  __typename?: 'AccountError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IAccountErrorCode
}

export enum IAccountErrorCode {
  ActivateOwnAccount = 'ACTIVATE_OWN_ACCOUNT',
  ActivateSuperuserAccount = 'ACTIVATE_SUPERUSER_ACCOUNT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  DeactivateOwnAccount = 'DEACTIVATE_OWN_ACCOUNT',
  DeactivateSuperuserAccount = 'DEACTIVATE_SUPERUSER_ACCOUNT',
  DeleteNonStaffUser = 'DELETE_NON_STAFF_USER',
  DeleteOwnAccount = 'DELETE_OWN_ACCOUNT',
  DeleteStaffAccount = 'DELETE_STAFF_ACCOUNT',
  DeleteSuperuserAccount = 'DELETE_SUPERUSER_ACCOUNT',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidPassword = 'INVALID_PASSWORD',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  NotFound = 'NOT_FOUND',
  OutOfScopeServiceAccount = 'OUT_OF_SCOPE_SERVICE_ACCOUNT',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  OutOfScopeGroup = 'OUT_OF_SCOPE_GROUP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  PasswordEntirelyNumeric = 'PASSWORD_ENTIRELY_NUMERIC',
  PasswordTooCommon = 'PASSWORD_TOO_COMMON',
  PasswordTooShort = 'PASSWORD_TOO_SHORT',
  PasswordTooSimilar = 'PASSWORD_TOO_SIMILAR',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type IRefreshToken = {
  __typename?: 'RefreshToken'
  token?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['GenericScalar']>
}

export type IVerifyToken = {
  __typename?: 'VerifyToken'
  payload?: Maybe<Scalars['GenericScalar']>
  user?: Maybe<IUser>
}

export type ICheckoutAddPromoCode = {
  __typename?: 'CheckoutAddPromoCode'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutError = {
  __typename?: 'CheckoutError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: ICheckoutErrorCode
}

export enum ICheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CheckoutNotFullyPaid = 'CHECKOUT_NOT_FULLY_PAID',
  GraphqlError = 'GRAPHQL_ERROR',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NotFound = 'NOT_FOUND',
  PaymentError = 'PAYMENT_ERROR',
  QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  ShippingNotRequired = 'SHIPPING_NOT_REQUIRED',
  TaxError = 'TAX_ERROR',
  Unique = 'UNIQUE',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
  ZeroQuantity = 'ZERO_QUANTITY',
}

export type ICheckoutBillingAddressUpdate = {
  __typename?: 'CheckoutBillingAddressUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutComplete = {
  __typename?: 'CheckoutComplete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  order?: Maybe<IOrder>
  confirmationNeeded: Scalars['Boolean']
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutCreate = {
  __typename?: 'CheckoutCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  created?: Maybe<Scalars['Boolean']>
  checkoutErrors: Array<ICheckoutError>
  checkout?: Maybe<ICheckout>
}

export type ICheckoutCreateInput = {
  lines: Array<Maybe<ICheckoutLineInput>>
  email?: Maybe<Scalars['String']>
  shippingAddress?: Maybe<IAddressInput>
  billingAddress?: Maybe<IAddressInput>
}

export type ICheckoutLineInput = {
  quantity: Scalars['Int']
  variantId: Scalars['ID']
}

export type ICheckoutCustomerAttach = {
  __typename?: 'CheckoutCustomerAttach'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutCustomerDetach = {
  __typename?: 'CheckoutCustomerDetach'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutEmailUpdate = {
  __typename?: 'CheckoutEmailUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutLineDelete = {
  __typename?: 'CheckoutLineDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutLinesAdd = {
  __typename?: 'CheckoutLinesAdd'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutLinesUpdate = {
  __typename?: 'CheckoutLinesUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutRemovePromoCode = {
  __typename?: 'CheckoutRemovePromoCode'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutPaymentCreate = {
  __typename?: 'CheckoutPaymentCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  payment?: Maybe<IPayment>
  paymentErrors: Array<IPaymentError>
}

export type IPaymentInput = {
  gateway: Scalars['String']
  token: Scalars['String']
  amount?: Maybe<Scalars['Decimal']>
  billingAddress?: Maybe<IAddressInput>
}

export type ICheckoutShippingAddressUpdate = {
  __typename?: 'CheckoutShippingAddressUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutShippingMethodUpdate = {
  __typename?: 'CheckoutShippingMethodUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkout?: Maybe<ICheckout>
  checkoutErrors: Array<ICheckoutError>
}

export type ICheckoutUpdateMeta = {
  __typename?: 'CheckoutUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkoutErrors: Array<ICheckoutError>
  checkout?: Maybe<ICheckout>
}

export type ICheckoutClearMeta = {
  __typename?: 'CheckoutClearMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkoutErrors: Array<ICheckoutError>
  checkout?: Maybe<ICheckout>
}

export type ICheckoutUpdatePrivateMeta = {
  __typename?: 'CheckoutUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkoutErrors: Array<ICheckoutError>
  checkout?: Maybe<ICheckout>
}

export type ICheckoutClearPrivateMeta = {
  __typename?: 'CheckoutClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  checkoutErrors: Array<ICheckoutError>
  checkout?: Maybe<ICheckout>
}

export type IAppCreate = {
  __typename?: 'AppCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  authToken?: Maybe<Scalars['String']>
  appErrors: Array<IAppError>
  app?: Maybe<IApp>
}

export type IAppError = {
  __typename?: 'AppError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IAppErrorCode
  permissions?: Maybe<Array<IPermissionEnum>>
}

export enum IAppErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  OutOfScopeApp = 'OUT_OF_SCOPE_APP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
}

export type IAppInput = {
  name?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  permissions?: Maybe<Array<Maybe<IPermissionEnum>>>
}

export type IAppUpdate = {
  __typename?: 'AppUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  appErrors: Array<IAppError>
  app?: Maybe<IApp>
}

export type IAppDelete = {
  __typename?: 'AppDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  appErrors: Array<IAppError>
  app?: Maybe<IApp>
}

export type IAppTokenCreate = {
  __typename?: 'AppTokenCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  authToken?: Maybe<Scalars['String']>
  appErrors: Array<IAppError>
  appToken?: Maybe<IAppToken>
}

export type IAppTokenInput = {
  name?: Maybe<Scalars['String']>
  app: Scalars['ID']
}

export type IAppTokenDelete = {
  __typename?: 'AppTokenDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  appErrors: Array<IAppError>
  appToken?: Maybe<IAppToken>
}

export type IRequestPasswordReset = {
  __typename?: 'RequestPasswordReset'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
}

export type IConfirmAccount = {
  __typename?: 'ConfirmAccount'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
}

export type ISetPassword = {
  __typename?: 'SetPassword'
  token?: Maybe<Scalars['String']>
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IPasswordChange = {
  __typename?: 'PasswordChange'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
}

export type IRequestEmailChange = {
  __typename?: 'RequestEmailChange'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
}

export type IConfirmEmailChange = {
  __typename?: 'ConfirmEmailChange'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
}

export type IAccountAddressCreate = {
  __typename?: 'AccountAddressCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
  address?: Maybe<IAddress>
}

export enum IAddressTypeEnum {
  Billing = 'BILLING',
  Shipping = 'SHIPPING',
}

export type IAccountAddressUpdate = {
  __typename?: 'AccountAddressUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
  address?: Maybe<IAddress>
}

export type IAccountAddressDelete = {
  __typename?: 'AccountAddressDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
  address?: Maybe<IAddress>
}

export type IAccountSetDefaultAddress = {
  __typename?: 'AccountSetDefaultAddress'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
}

export type IAccountRegister = {
  __typename?: 'AccountRegister'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  requiresConfirmation?: Maybe<Scalars['Boolean']>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IAccountRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  redirectUrl?: Maybe<Scalars['String']>
}

export type IAccountUpdate = {
  __typename?: 'AccountUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IAccountInput = {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  defaultBillingAddress?: Maybe<IAddressInput>
  defaultShippingAddress?: Maybe<IAddressInput>
}

export type IAccountRequestDeletion = {
  __typename?: 'AccountRequestDeletion'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
}

export type IAccountDelete = {
  __typename?: 'AccountDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IAccountUpdateMeta = {
  __typename?: 'AccountUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IAddressCreate = {
  __typename?: 'AddressCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
  address?: Maybe<IAddress>
}

export type IAddressUpdate = {
  __typename?: 'AddressUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
  address?: Maybe<IAddress>
}

export type IAddressDelete = {
  __typename?: 'AddressDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
  address?: Maybe<IAddress>
}

export type IAddressSetDefault = {
  __typename?: 'AddressSetDefault'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
}

export type ICustomerCreate = {
  __typename?: 'CustomerCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IUserCreateInput = {
  defaultBillingAddress?: Maybe<IAddressInput>
  defaultShippingAddress?: Maybe<IAddressInput>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  note?: Maybe<Scalars['String']>
  redirectUrl?: Maybe<Scalars['String']>
}

export type ICustomerUpdate = {
  __typename?: 'CustomerUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type ICustomerInput = {
  defaultBillingAddress?: Maybe<IAddressInput>
  defaultShippingAddress?: Maybe<IAddressInput>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  note?: Maybe<Scalars['String']>
}

export type ICustomerDelete = {
  __typename?: 'CustomerDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type ICustomerBulkDelete = {
  __typename?: 'CustomerBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  accountErrors: Array<IAccountError>
}

export type IStaffCreate = {
  __typename?: 'StaffCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  staffErrors: Array<IStaffError>
  user?: Maybe<IUser>
}

export type IStaffError = {
  __typename?: 'StaffError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IAccountErrorCode
  permissions?: Maybe<Array<IPermissionEnum>>
  groups?: Maybe<Array<Scalars['ID']>>
  users?: Maybe<Array<Scalars['ID']>>
}

export type IStaffCreateInput = {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  note?: Maybe<Scalars['String']>
  addGroups?: Maybe<Array<Scalars['ID']>>
  redirectUrl?: Maybe<Scalars['String']>
}

export type IStaffUpdate = {
  __typename?: 'StaffUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  staffErrors: Array<IStaffError>
  user?: Maybe<IUser>
}

export type IStaffUpdateInput = {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  note?: Maybe<Scalars['String']>
  addGroups?: Maybe<Array<Scalars['ID']>>
  removeGroups?: Maybe<Array<Scalars['ID']>>
}

export type IStaffDelete = {
  __typename?: 'StaffDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  staffErrors: Array<IStaffError>
  user?: Maybe<IUser>
}

export type IStaffBulkDelete = {
  __typename?: 'StaffBulkDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  staffErrors: Array<IStaffError>
}

export type IUserAvatarUpdate = {
  __typename?: 'UserAvatarUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
}

export type IUserAvatarDelete = {
  __typename?: 'UserAvatarDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  user?: Maybe<IUser>
  accountErrors: Array<IAccountError>
}

export type IUserBulkSetActive = {
  __typename?: 'UserBulkSetActive'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  count: Scalars['Int']
  accountErrors: Array<IAccountError>
}

export type IUserUpdateMeta = {
  __typename?: 'UserUpdateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IUserClearMeta = {
  __typename?: 'UserClearMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IUserUpdatePrivateMeta = {
  __typename?: 'UserUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IUserClearPrivateMeta = {
  __typename?: 'UserClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  user?: Maybe<IUser>
}

export type IServiceAccountCreate = {
  __typename?: 'ServiceAccountCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  authToken?: Maybe<Scalars['String']>
  accountErrors: Array<IAccountError>
  serviceAccount?: Maybe<IServiceAccount>
}

export type IServiceAccountInput = {
  name?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  permissions?: Maybe<Array<Maybe<IPermissionEnum>>>
}

export type IServiceAccountUpdate = {
  __typename?: 'ServiceAccountUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  serviceAccount?: Maybe<IServiceAccount>
}

export type IServiceAccountDelete = {
  __typename?: 'ServiceAccountDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  serviceAccount?: Maybe<IServiceAccount>
}

export type IServiceAccountUpdatePrivateMeta = {
  __typename?: 'ServiceAccountUpdatePrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  serviceAccount?: Maybe<IServiceAccount>
}

export type IServiceAccountClearPrivateMeta = {
  __typename?: 'ServiceAccountClearPrivateMeta'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  serviceAccount?: Maybe<IServiceAccount>
}

export type IServiceAccountTokenCreate = {
  __typename?: 'ServiceAccountTokenCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  authToken?: Maybe<Scalars['String']>
  accountErrors: Array<IAccountError>
  serviceAccountToken?: Maybe<IServiceAccountToken>
}

export type IServiceAccountTokenInput = {
  name?: Maybe<Scalars['String']>
  serviceAccount: Scalars['ID']
}

export type IServiceAccountTokenDelete = {
  __typename?: 'ServiceAccountTokenDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  accountErrors: Array<IAccountError>
  serviceAccountToken?: Maybe<IServiceAccountToken>
}

export type IPermissionGroupCreate = {
  __typename?: 'PermissionGroupCreate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  group?: Maybe<IGroup>
  permissionGroupErrors: Array<IPermissionGroupError>
}

export type IPermissionGroupError = {
  __typename?: 'PermissionGroupError'
  field?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  code: IPermissionGroupErrorCode
  permissions?: Maybe<Array<IPermissionEnum>>
  users?: Maybe<Array<Scalars['ID']>>
}

export enum IPermissionGroupErrorCode {
  AssignNonStaffMember = 'ASSIGN_NON_STAFF_MEMBER',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  CannotRemoveFromLastGroup = 'CANNOT_REMOVE_FROM_LAST_GROUP',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type IPermissionGroupCreateInput = {
  addPermissions?: Maybe<Array<IPermissionEnum>>
  addUsers?: Maybe<Array<Scalars['ID']>>
  name: Scalars['String']
}

export type IPermissionGroupUpdate = {
  __typename?: 'PermissionGroupUpdate'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  group?: Maybe<IGroup>
  permissionGroupErrors: Array<IPermissionGroupError>
}

export type IPermissionGroupUpdateInput = {
  addPermissions?: Maybe<Array<IPermissionEnum>>
  addUsers?: Maybe<Array<Scalars['ID']>>
  name?: Maybe<Scalars['String']>
  removePermissions?: Maybe<Array<IPermissionEnum>>
  removeUsers?: Maybe<Array<Scalars['ID']>>
}

export type IPermissionGroupDelete = {
  __typename?: 'PermissionGroupDelete'
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<IError>
  permissionGroupErrors: Array<IPermissionGroupError>
  group?: Maybe<IGroup>
}
