import { Candidate, Report, MayorExtra, MayorStory, MayorSchedule, MayorGallery, CentralPolicy } from '@justice/types';
export declare class SheetsClient {
    private sheets;
    private sheetId;
    constructor();
    getCandidates(): Promise<Candidate[]>;
    getCandidate(slug: string): Promise<Candidate | null>;
    verifyCandidate(slug: string, password?: string): Promise<Candidate | null>;
    saveCandidate(candidate: Candidate): Promise<boolean>;
    getReports(slug: string): Promise<Report[]>;
    saveReports(slug: string, reports: Report[]): Promise<boolean>;
    getMayorExtra(slug: string): Promise<MayorExtra | undefined>;
    saveMayorExtra(extra: MayorExtra): Promise<boolean>;
    getMayorStories(slug: string): Promise<MayorStory[]>;
    saveMayorStories(slug: string, stories: MayorStory[]): Promise<boolean>;
    getMayorSchedules(slug: string): Promise<MayorSchedule[]>;
    saveMayorSchedules(slug: string, schedules: MayorSchedule[]): Promise<boolean>;
    getMayorGallery(slug: string): Promise<MayorGallery[]>;
    saveMayorGallery(slug: string, gallery: MayorGallery[]): Promise<boolean>;
    getCentralPolicies(): Promise<CentralPolicy[]>;
    private mapRowToCandidate;
}
export declare const sheetsClient: SheetsClient;
