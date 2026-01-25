import { Candidate, Report } from '@justice/types';
export declare class SheetsClient {
    private sheets;
    private sheetId;
    constructor();
    getCandidates(): Promise<Candidate[]>;
    getCandidate(slug: string): Promise<Candidate | null>;
    verifyCandidate(slug: string, password?: string): Promise<Candidate | null>;
    saveCandidate(candidate: Candidate): Promise<boolean>;
    getReports(slug: string): Promise<Report[]>;
    saveReports(reports: Report[]): Promise<boolean>;
    private mapRowToCandidate;
}
export declare const sheetsClient: SheetsClient;
