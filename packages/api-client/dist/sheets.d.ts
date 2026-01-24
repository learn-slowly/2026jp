import { Candidate } from '@justice/types';
export declare class SheetsClient {
    private sheets;
    private sheetId;
    constructor();
    getCandidates(): Promise<Candidate[]>;
    getCandidateBySlug(slug: string): Promise<Candidate | null>;
    saveCandidate(candidate: Candidate): Promise<boolean>;
    private mapRowToCandidate;
}
export declare const sheetsClient: SheetsClient;
