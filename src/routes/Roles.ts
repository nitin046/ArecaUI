export enum RoleType {
  IT_ADMIN = 'IT ADMIN',
  SOURCING_MANAGER = 'SOURCING MANAGER',
  PROJECT_CHAMPION = 'PROJECT CHAMPION',
  FINANCE_ADMIN = 'FINANCE ADMIN',
  VENDOR = 'VENDOR',
}

export class RoleGroup {
  static readonly ADMIN: RoleType[] = [
    RoleType.SOURCING_MANAGER,
    RoleType.PROJECT_CHAMPION,
    RoleType.FINANCE_ADMIN,
  ];
  static readonly ALL_EXCLUDE_IT: RoleType[] = [
    RoleType.SOURCING_MANAGER,
    RoleType.PROJECT_CHAMPION,
    RoleType.FINANCE_ADMIN,
    RoleType.VENDOR
  ];
  static readonly IT_ADMIN: RoleType[] = [RoleType.IT_ADMIN];
  static readonly SOURCING_IT: RoleType[] = [
    RoleType.IT_ADMIN,
    RoleType.SOURCING_MANAGER,
  ];
  static readonly SOURCING_MANAGER: RoleType[] = [RoleType.SOURCING_MANAGER];
  static readonly VENDOR: RoleType[] = [RoleType.VENDOR];
}
