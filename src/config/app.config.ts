interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Update personal user information',
    'View purchase history',
    "Read information about company's employees",
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage employee data', 'Manage customer data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/68e69571-0d8d-4133-83ae-c9a3ef0f9791',
};
