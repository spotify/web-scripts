/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const hasKeyInObj = (
  key: string,
  obj: { [s: string]: any } = {},
): boolean => {
  const [k, ...restOfK] = key.split('.');
  if (restOfK.length === 0) {
    return Object.keys(obj).some((ok) => ok === k);
  }
  const nextObj = obj[k];
  if (!(nextObj instanceof Object)) {
    return false;
  }
  return hasKeyInObj(restOfK.join('.'), nextObj);
};
