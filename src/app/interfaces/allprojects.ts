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
        totalProjects: number;
        themes: Themes;
        countries: Countries;
        id?: number;
        bridgeId?: number;
        name: string;
        addressLine1: string;
        addressLine2: string;
        city: string;
        state: string;
        postal: string;
        iso3166CountryCode: string;
        url: string;
        logoUrl: string;
        mission: string;
        activeProjects?: number;
        country: string;
        ein: string;
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
        contactName: string;
        contactTitle: string;
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
        longitude?: number;
        latitude?: number;
    }

    export interface Projects {
        hasNext: boolean;
        nextProjectId: number;
        project: Project[];
        numberFound: number;
    }

    export interface RootObject {
        projects: Projects;
    }

