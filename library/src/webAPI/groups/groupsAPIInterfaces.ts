/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: JB (jb@codecorsair.com)
 * @Date: 2016-10-13 11:27:58
 * @Last Modified by: JB (jb@codecorsair.com)
 * @Last Modified time: 2016-10-13 11:28:32
 */

export enum groupType {
  Warband,
  Order,
  Alliance,
  Campaign
}

export interface GroupInvite {
  created: string;
  groupType: groupType;
  inviteCode: string;
  invitedByName: string;
  groupID: string;
  groupName: string;
}
