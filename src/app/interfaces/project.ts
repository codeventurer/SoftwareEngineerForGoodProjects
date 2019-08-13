    export interface Theme {
        id: string;
        name: string;
    }

    export interface Themes {
        theme: Theme[];
    }

    export interface Country {
        name: string;
        iso3166CountryCode: string;
    }

    export interface Countries {
        country: Country[];
    }

    export interface Organization {
        id: number;
        bridgeId: number;
        name: string;
        ein: string;
        addressLine1: string;
        addressLine2: string;
        city: string;
        state: string;
        postal: string;
        iso3166CountryCode: string;
        url: string;
        logoUrl: string;
        mission: string;
        totalProjects: number;
        activeProjects: number;
        themes: Themes;
        countries: Countries;
        country: string;
    }

    export interface Imagelink {
        url: string;
        size: string;
    }

    export interface Image {
        title: string;
        id: number;
        imagelink: Imagelink[];
    }

    export interface Project {
        id: number;
        organization: Organization;
        active: boolean;
        title: string;
        summary: string;
        contactAddress: string;
        contactAddress2: string;
        contactCity: string;
        contactState: string;
        contactPostal: string;
        contactCountry: string;
        contactUrl: string;
        projectLink: string;
        progressReportLink: string;
        themeName: string;
        country: string;
        iso3166CountryCode: string;
        region: string;
        goal: number;
        funding: number;
        remaining: number;
        numberOfDonations: number;
        status: string;
        need: string;
        longTermImpact: string;
        activities: string;
        additionalDocumentation: string;
        imageLink: string;
        imageGallerySize: number;
        approvedDate: Date;
        image: Image;
        type: string;
    }

    export interface RootObject {
        project: Project;
    }

