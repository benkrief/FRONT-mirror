import {File} from "@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system";

export interface Post {
  uuid: string;
  pic : File;
  legende: string;
  adresse: string;
}
